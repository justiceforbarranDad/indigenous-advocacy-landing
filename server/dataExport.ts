import { getDb } from './db';
import { surveyResponses } from '../drizzle/schema';
import { desc } from 'drizzle-orm';

/**
 * Export survey responses as CSV
 */
export async function exportSurveyAsCSV(): Promise<string> {
  try {
    const db = await getDb();
    if (!db) throw new Error('Database not available');

    const responses = await db
      .select()
      .from(surveyResponses)
      .orderBy(desc(surveyResponses.createdAt));

    // CSV headers
    const headers = ['ID', 'Response', 'Name', 'Email', 'City', 'Province', 'Date', 'IP Address'];
    const rows = responses.map((r: any) => [
      r.id,
      r.response === 'yes' ? 'Experienced Issues' : 'No Issues',
      r.name || '',
      r.email || '',
      r.city || '',
      r.province || '',
      new Date(r.createdAt).toISOString(),
      r.ipAddress || '',
    ]);

    // Convert to CSV format
    const csv = [
      headers.join(','),
      ...rows.map((row: any[]) =>
        row.map((cell: any) => {
          // Escape quotes and wrap in quotes if contains comma
          const str = String(cell);
          return str.includes(',') ? `"${str.replace(/"/g, '""')}"` : str;
        }).join(',')
      ),
    ].join('\n');

    return csv;
  } catch (error) {
    console.error('Error exporting survey as CSV:', error);
    throw error;
  }
}

/**
 * Export analytics summary as CSV
 */
export async function exportAnalyticsSummaryAsCSV(): Promise<string> {
  try {
    const db = await getDb();
    if (!db) throw new Error('Database not available');

    const responses = await db
      .select()
      .from(surveyResponses);

    // Calculate province stats
    const provinceStats: Record<string, { yes: number; no: number; total: number }> = {};
    responses.forEach((response: any) => {
      const province = response.province || 'Unknown';
      if (!provinceStats[province]) {
        provinceStats[province] = { yes: 0, no: 0, total: 0 };
      }
      if (response.response === 'yes') {
        provinceStats[province].yes++;
      } else {
        provinceStats[province].no++;
      }
      provinceStats[province].total++;
    });

    // CSV headers
    const headers = ['Province', 'Experienced Issues', 'No Issues', 'Total Responses', 'Percentage Affected'];
    const rows = Object.entries(provinceStats)
      .sort((a, b) => b[1].total - a[1].total)
      .map(([province, stats]) => [
        province,
        stats.yes,
        stats.no,
        stats.total,
        `${Math.round((stats.yes / stats.total) * 100)}%`,
      ]);

    // Add summary row
    const totalYes = Object.values(provinceStats).reduce((sum, s) => sum + s.yes, 0);
    const totalNo = Object.values(provinceStats).reduce((sum, s) => sum + s.no, 0);
    const totalAll = totalYes + totalNo;

    rows.push([
      'TOTAL',
      totalYes,
      totalNo,
      totalAll,
      `${Math.round((totalYes / totalAll) * 100)}%`,
    ]);

    // Convert to CSV format
    const csv = [
      headers.join(','),
      ...rows.map((row: any[]) =>
        row.map((cell: any) => {
          const str = String(cell);
          return str.includes(',') ? `"${str.replace(/"/g, '""')}"` : str;
        }).join(',')
      ),
    ].join('\n');

    return csv;
  } catch (error) {
    console.error('Error exporting analytics summary as CSV:', error);
    throw error;
  }
}

/**
 * Generate PDF report (requires PDF generation library)
 * This returns HTML that can be converted to PDF
 */
export async function generateAnalyticsReport(): Promise<string> {
  try {
    const db = await getDb();
    if (!db) throw new Error('Database not available');

    const responses = await db
      .select()
      .from(surveyResponses);

    // Calculate stats
    const yes = responses.filter((r: any) => r.response === 'yes').length;
    const no = responses.filter((r: any) => r.response === 'no').length;
    const total = yes + no;

    // Province stats
    const provinceStats: Record<string, { yes: number; no: number }> = {};
    responses.forEach((response: any) => {
      const province = response.province || 'Unknown';
      if (!provinceStats[province]) {
        provinceStats[province] = { yes: 0, no: 0 };
      }
      if (response.response === 'yes') {
        provinceStats[province].yes++;
      } else {
        provinceStats[province].no++;
      }
    });

    // Generate HTML report
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Survey Analytics Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
          h1 { color: #dc2626; border-bottom: 3px solid #dc2626; padding-bottom: 10px; }
          h2 { color: #7c2d12; margin-top: 30px; }
          .summary { background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .stat { display: inline-block; margin-right: 40px; }
          .stat-value { font-size: 32px; font-weight: bold; color: #dc2626; }
          .stat-label { font-size: 14px; color: #666; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th { background: #7c2d12; color: white; padding: 12px; text-align: left; }
          td { padding: 10px; border-bottom: 1px solid #ddd; }
          tr:nth-child(even) { background: #f9fafb; }
          .footer { margin-top: 40px; font-size: 12px; color: #999; border-top: 1px solid #ddd; padding-top: 20px; }
        </style>
      </head>
      <body>
        <h1>Survey Analytics Report</h1>
        <p>Generated: ${new Date().toLocaleDateString()}</p>

        <h2>Summary Statistics</h2>
        <div class="summary">
          <div class="stat">
            <div class="stat-value">${yes}</div>
            <div class="stat-label">Experienced Issues</div>
          </div>
          <div class="stat">
            <div class="stat-value">${no}</div>
            <div class="stat-label">No Issues</div>
          </div>
          <div class="stat">
            <div class="stat-value">${total}</div>
            <div class="stat-label">Total Responses</div>
          </div>
          <div class="stat">
            <div class="stat-value">${Math.round((yes / total) * 100)}%</div>
            <div class="stat-label">Affected</div>
          </div>
        </div>

        <h2>Province Breakdown</h2>
        <table>
          <thead>
            <tr>
              <th>Province</th>
              <th>Experienced Issues</th>
              <th>No Issues</th>
              <th>Total</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(provinceStats)
              .sort((a, b) => (b[1].yes + b[1].no) - (a[1].yes + a[1].no))
              .map(([province, stats]) => {
                const total = stats.yes + stats.no;
                const percentage = Math.round((stats.yes / total) * 100);
                return `
                  <tr>
                    <td>${province}</td>
                    <td>${stats.yes}</td>
                    <td>${stats.no}</td>
                    <td>${total}</td>
                    <td>${percentage}%</td>
                  </tr>
                `;
              })
              .join('')}
          </tbody>
        </table>

        <div class="footer">
          <p>This report documents systemic failures affecting Indigenous families across Canada.</p>
          <p>Data collected through community survey: justiceforbarran.org</p>
        </div>
      </body>
      </html>
    `;

    return html;
  } catch (error) {
    console.error('Error generating analytics report:', error);
    throw error;
  }
}
