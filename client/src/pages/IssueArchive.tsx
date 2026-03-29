import { Link } from 'wouter';

export default function IssueArchive() {
  const issues = [
    {
      id: 1,
      volume: 1,
      issue: 1,
      date: "March 28, 2026",
      title: "Front Page Story: Five Years of Systemic Failure",
      description: "The inaugural issue documents Barran's five-year fight for justice following a near-fatal stabbing attack. Features the main story, key facts timeline, and calls for accountability.",
      highlights: [
        "Main Story: Five Years of Systemic Failure",
        "Key Facts: Timeline of institutional failures",
        "Breaking News: UN complaint filed",
        "Multimedia: French podcast series",
        "Petition: 10,847+ signatures"
      ],
      link: "/newspaper"
    },
    {
      id: 2,
      volume: 1,
      issue: 2,
      date: "Coming Soon",
      title: "In Memoriam: Human Rights Champions",
      description: "The second issue honors the legacy of human rights activists and Indigenous soldiers who fought for justice and freedom. Features biographical profiles and their contributions to the fight for systemic accountability.",
      highlights: [
        "In Memoriam: 10 Human Rights Activists",
        "Fallen Soldiers: 10 Indigenous Warriors",
        "Historical Context: Systemic oppression across generations",
        "Legacy: How their fight continues today",
        "Action: How to honor their memory"
      ],
      link: "#"
    },
    {
      id: 3,
      volume: 1,
      issue: 3,
      date: "Coming Soon",
      title: "Global Voiceless Victims: Systemic Failures Worldwide",
      description: "The third issue expands the narrative beyond Barran's case to document systemic failures affecting voiceless victims globally—children in foster care, refugee families, marginalized communities, and all who've been denied justice.",
      highlights: [
        "Global Cases: Systemic failures across borders",
        "Sponsorship Opportunities: How to support all voiceless victims",
        "Pro Bono Legal: Lawyers offering free representation",
        "International Accountability: UN and global bodies",
        "Action: Join the global justice movement"
      ],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center border-b-4 border-black pb-8">
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            NEWSPAPER ARCHIVE
          </h1>
          <p className="text-xl font-bold">Justice for Barran — Volume 1</p>
          <p className="text-lg italic mt-4">
            A complete archive of all newspaper issues documenting the fight for justice, systemic accountability, and the voices of all voiceless victims.
          </p>
        </div>

        {/* Issues Grid */}
        <div className="grid md:grid-cols-1 gap-8">
          {issues.map((issue) => (
            <div key={issue.id} className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
              {/* Issue Header */}
              <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-black">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-2">
                    VOLUME {issue.volume}, ISSUE {issue.issue}
                  </p>
                  <h2 className="text-3xl font-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {issue.title}
                  </h2>
                  <p className="text-sm font-bold text-gray-700">{issue.date}</p>
                </div>
                {issue.link !== "#" && (
                  <Link href={issue.link}>
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors border-2 border-black whitespace-nowrap">
                      Read Issue
                    </button>
                  </Link>
                )}
                {issue.link === "#" && (
                  <button className="bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-bold cursor-not-allowed border-2 border-black whitespace-nowrap">
                    Coming Soon
                  </button>
                )}
              </div>

              {/* Description */}
              <p className="text-lg leading-relaxed mb-6">
                {issue.description}
              </p>

              {/* Highlights */}
              <div className="bg-gray-50 p-6 border-2 border-black rounded-lg">
                <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Issue Highlights</h3>
                <ul className="space-y-3">
                  {issue.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-sm">
                      <span className="font-bold">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Info */}
        <div className="mt-12 bg-black text-white p-8 rounded-lg border-4 border-black text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Subscribe to Future Issues
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            New issues will be published as the fight for justice continues. Each issue documents new developments, emerging cases, and the expanding movement for systemic accountability worldwide.
          </p>
          <p className="text-lg font-bold">
            Stay informed. Stay engaged. Stay committed to justice for all voiceless victims.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <Link href="/newspaper">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors border-2 border-black">
              Read Current Issue (Volume 1, Issue 1)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
