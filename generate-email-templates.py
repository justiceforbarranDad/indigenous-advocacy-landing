#!/usr/bin/env python3
"""
Generate downloadable .docx email templates for Justice for Barran campaign
Creates individual Word documents for each sponsor email template
"""

from docx import Document
from docx.shared import Pt, RGBColor, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
import os

# Create output directory
output_dir = '/home/ubuntu/webdev-static-assets/email-templates'
os.makedirs(output_dir, exist_ok=True)

# Email templates data
templates = [
    # SPORTS TEAMS
    {
        'filename': '01_Toronto_Maple_Leafs.docx',
        'to': 'media@mapleleafs.com',
        'subject': 'Orange Shirt Day 2026: Real Reconciliation Requires Action, Not Marketing',
        'body': '''Dear Toronto Maple Leafs Leadership,

Your organization has committed to reconciliation and Indigenous rights. This Orange Shirt Day, we ask you to prove it.

A First Nations youth in Quebec has been denied justice for 5+ years. Stabbed three times, he received no psychological support, no education recovery, and no government accountability. While your organization sponsors Orange Shirt Day events, families like his are abandoned by every institution.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund. Real reconciliation means supporting Indigenous families fighting systemic injustice—not just wearing orange once a year.

Your response will be tracked publicly at: www.justiceforbarran.com/sponsor-response-tracker

Will the Maple Leafs choose performative activism or real accountability?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '02_Montreal_Canadiens.docx',
        'to': 'communications@canadiens.com',
        'subject': 'Orange Shirt Day 2026: From Marketing to Real Action',
        'body': '''Dear Montreal Canadiens Organization,

As a Montreal-based team, you have a responsibility to the Indigenous communities in your city. This Orange Shirt Day, we challenge you to move beyond marketing.

A First Nations child in Laval, Quebec—your city—was stabbed three times and denied all support. The system failed him. Government failed him. Now we're asking: will your organization step up?

We demand: Redirect Orange Shirt Day donations to Justice for Barran's legal defense fund. Show that your reconciliation commitment extends beyond one day of awareness.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

The Canadiens have a choice: performative activism or real change.

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '03_Vancouver_Canucks.docx',
        'to': 'media@canucks.com',
        'subject': 'Orange Shirt Day: Will You Support Indigenous Justice?',
        'body': '''Dear Vancouver Canucks,

Your organization claims to support Indigenous peoples. This Orange Shirt Day, we're asking you to prove it with action.

A First Nations youth in Quebec has been fighting for justice alone for 5+ years. No psychological support. No education. No government help. While your organization sponsors reconciliation events, Indigenous families are abandoned.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Will the Canucks choose real reconciliation or continue performative activism?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '04_Calgary_Flames.docx',
        'to': 'media@flames.ca',
        'subject': 'Orange Shirt Day 2026: From Words to Action',
        'body': '''Dear Calgary Flames Leadership,

This Orange Shirt Day, we challenge your organization to move beyond statements and take real action for Indigenous justice.

A First Nations child was stabbed three times and denied all support for 5+ years. Every government institution failed him. Now we're asking: will your organization help?

We demand: Redirect Orange Shirt Day donations to Justice for Barran's legal defense fund. Show that your reconciliation commitment is real.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

The Flames have a choice: performative activism or real accountability.

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '05_Edmonton_Oilers.docx',
        'to': 'media@oilers.com',
        'subject': 'Orange Shirt Day: Real Reconciliation Requires Action',
        'body': '''Dear Edmonton Oilers,

Your organization has committed to Indigenous reconciliation. This Orange Shirt Day, we're asking you to prove it with action, not just words.

A First Nations youth in Quebec has been denied justice for 5+ years. Stabbed three times, he received no support from any government institution. While your organization sponsors reconciliation events, Indigenous families are abandoned.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Will the Oilers choose real reconciliation or continue performative activism?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '06_Winnipeg_Jets.docx',
        'to': 'media@winnipegjets.com',
        'subject': 'Orange Shirt Day 2026: From Marketing to Justice',
        'body': '''Dear Winnipeg Jets Organization,

This Orange Shirt Day, we challenge your organization to move beyond marketing and support real Indigenous justice.

A First Nations child in Quebec has been fighting for justice alone for 5+ years. No psychological support. No education recovery. No government accountability. While your organization sponsors reconciliation events, Indigenous families are abandoned.

We demand: Redirect Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

The Jets have a choice: performative activism or real change.

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '07_Toronto_Argonauts.docx',
        'to': 'media@argonauts.ca',
        'subject': 'Orange Shirt Day: Real Accountability for Indigenous Youth',
        'body': '''Dear Toronto Argonauts,

Your organization claims to support Indigenous communities. This Orange Shirt Day, we're asking you to prove it.

A First Nations youth in Quebec has been denied justice for 5+ years. Stabbed three times, he received no support from any government institution. While your organization sponsors reconciliation events, Indigenous families are abandoned.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Will the Argonauts choose real reconciliation or continue performative activism?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '08_BC_Lions.docx',
        'to': 'media@bclions.com',
        'subject': 'Orange Shirt Day 2026: From Words to Action',
        'body': '''Dear BC Lions Leadership,

This Orange Shirt Day, we challenge your organization to move beyond statements and take real action for Indigenous justice.

A First Nations child in Quebec has been denied justice for 5+ years. Stabbed three times, he received no support from any government institution. While your organization sponsors reconciliation events, Indigenous families are abandoned.

We demand: Redirect Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

The Lions have a choice: performative activism or real accountability.

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    # CORPORATIONS
    {
        'filename': '09_Royal_Bank_of_Canada.docx',
        'to': 'corporatecitizenship@rbc.com',
        'subject': 'Orange Shirt Day 2026: Real Reconciliation Requires Action',
        'body': '''Dear RBC Leadership,

Your bank has positioned itself as a leader in reconciliation and Indigenous partnerships. This Orange Shirt Day, we're asking you to prove it with real action.

A First Nations youth in Quebec has been denied justice for 5+ years. Stabbed three times, he received no psychological support, no education recovery, and no government accountability. While your bank sponsors Orange Shirt Day events, Indigenous families are abandoned by every institution.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund. Show that your reconciliation commitment extends beyond marketing.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Will RBC choose performative activism or real accountability?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '10_TD_Bank.docx',
        'to': 'td.community@td.com',
        'subject': 'Orange Shirt Day: From Marketing to Justice',
        'body': '''Dear TD Bank Leadership,

Your organization has committed to Indigenous reconciliation. This Orange Shirt Day, we're asking you to prove it with action.

A First Nations child in Quebec has been fighting for justice alone for 5+ years. No psychological support. No education. No government help. While your bank sponsors reconciliation events, Indigenous families are abandoned.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Will TD choose real reconciliation or continue performative activism?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '11_Scotiabank.docx',
        'to': 'corporatecitizenship@scotiabank.com',
        'subject': 'Orange Shirt Day 2026: Real Accountability for Indigenous Youth',
        'body': '''Dear Scotiabank Leadership,

Your bank claims to support Indigenous communities and reconciliation. This Orange Shirt Day, we're asking you to prove it with real action.

A First Nations youth in Quebec has been denied justice for 5+ years. Stabbed three times, he received no support from any government institution. While your bank sponsors reconciliation events, Indigenous families are abandoned.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Will Scotiabank choose performative activism or real accountability?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '12_BMO_Financial_Group.docx',
        'to': 'bmo.community@bmo.com',
        'subject': 'Orange Shirt Day: From Words to Real Action',
        'body': '''Dear BMO Financial Group Leadership,

This Orange Shirt Day, we challenge your organization to move beyond statements and take real action for Indigenous justice.

A First Nations child in Quebec has been denied justice for 5+ years. Stabbed three times, he received no support from any government institution. While your bank sponsors reconciliation events, Indigenous families are abandoned.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

BMO has a choice: performative activism or real accountability.

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '13_Loblaws_Companies.docx',
        'to': 'corporate.affairs@loblaw.ca',
        'subject': 'Orange Shirt Day 2026: Real Reconciliation Requires Action',
        'body': '''Dear Loblaws Leadership,

Your company has positioned itself as committed to reconciliation and Indigenous communities. This Orange Shirt Day, we're asking you to prove it with action.

A First Nations youth in Quebec has been denied justice for 5+ years. Stabbed three times, he received no psychological support, no education recovery, and no government accountability. While your company sponsors Orange Shirt Day events, Indigenous families are abandoned.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Will Loblaws choose performative activism or real accountability?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '14_Shopify.docx',
        'to': 'corporate@shopify.com',
        'subject': 'Orange Shirt Day: From Marketing to Justice',
        'body': '''Dear Shopify Leadership,

Your company has committed to Indigenous reconciliation and support. This Orange Shirt Day, we're asking you to prove it with real action.

A First Nations child in Quebec has been fighting for justice alone for 5+ years. No psychological support. No education. No government help. While your company sponsors reconciliation events, Indigenous families are abandoned.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Will Shopify choose real reconciliation or continue performative activism?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '15_Canadian_Tire.docx',
        'to': 'corporatecommunications@canadiantire.ca',
        'subject': 'Orange Shirt Day 2026: Real Accountability for Indigenous Youth',
        'body': '''Dear Canadian Tire Leadership,

Your company claims to support Indigenous communities. This Orange Shirt Day, we're asking you to prove it with real action.

A First Nations youth in Quebec has been denied justice for 5+ years. Stabbed three times, he received no support from any government institution. While your company sponsors reconciliation events, Indigenous families are abandoned.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Will Canadian Tire choose performative activism or real accountability?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '16_Telus.docx',
        'to': 'corporate.citizenship@telus.com',
        'subject': 'Orange Shirt Day: From Words to Real Action',
        'body': '''Dear Telus Leadership,

This Orange Shirt Day, we challenge your organization to move beyond statements and take real action for Indigenous justice.

A First Nations child in Quebec has been denied justice for 5+ years. Stabbed three times, he received no support from any government institution. While your company sponsors reconciliation events, Indigenous families are abandoned.

We demand: Redirect a portion of your Orange Shirt Day donations to Justice for Barran's legal defense fund.

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Telus has a choice: performative activism or real accountability.

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    # GOVERNMENT
    {
        'filename': '17_Indigenous_Services_Canada.docx',
        'to': 'ISC.Inquiries-Demandes.ISC@canada.ca',
        'subject': 'URGENT: Jordan\'s Principle Violation - First Nations Youth Denied Services for 5+ Years',
        'body': '''Dear Indigenous Services Canada,

We are writing to formally demand that your department investigate and remedy the complete failure to apply Jordan's Principle in the case of a First Nations youth in Quebec who has been denied all government services for 5+ years following a serious violent incident.

The Facts:
- First Nations youth (Dene heritage) stabbed three times in 2021
- Denied psychological services by provincial DPJ and CISSS
- Jordan's Principle completely ignored despite federal obligation
- No coordinated federal-provincial response
- Youth now 18, receiving only $300/month welfare, unable to work or attend school

We demand:
1. Immediate investigation into Jordan's Principle implementation failure
2. Emergency services provision to this youth
3. Systemic audit of Jordan's Principle application in Quebec
4. Accountability for federal failure to enforce this legal obligation

This case will be documented and shared with UN Human Rights mechanisms. Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '18_Department_of_Canadian_Heritage.docx',
        'to': 'pch.inquiries-demandes.pch@canada.ca',
        'subject': 'Orange Shirt Day 2026: Real Reconciliation Requires Action',
        'body': '''Dear Department of Canadian Heritage,

Your department oversees Orange Shirt Day and reconciliation initiatives. This year, we're asking you to prove that reconciliation is more than a day of awareness.

A First Nations youth in Quebec has been denied justice for 5+ years. Stabbed three times, he received no psychological support, no education recovery, and no government accountability. While your department promotes Orange Shirt Day events, Indigenous families are abandoned.

We demand:
1. Department funding for Justice for Barran's legal defense
2. Investigation into systemic failures affecting this youth
3. Real reconciliation action beyond awareness campaigns
4. Accountability for government institutions that failed this child

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Will Canadian Heritage choose performative activism or real accountability?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '19_Quebec_Ministry_of_Indigenous_Affairs.docx',
        'to': 'info.autochtones@mce.gouv.qc.ca',
        'subject': 'URGENT: Systemic Failure of First Nations Youth in Quebec - Demand for Action',
        'body': '''Dear Quebec Ministry of Indigenous Affairs,

We are writing to formally demand that your ministry investigate and remedy the complete systemic failure affecting a First Nations youth in Laval, Quebec who has been denied all support for 5+ years following a serious violent incident.

The Facts:
- First Nations youth (Dene heritage) stabbed three times in 2021
- Denied psychological services by DPJ and CISSS Laval
- DPJ withdrew services January 2023 with no follow-up
- Youth now 18, receiving only $300/month welfare
- MNA sent cease-and-desist letter instead of constituent service
- Political system used intimidation instead of accountability

We demand:
1. Immediate investigation into DPJ and CISSS failures
2. Emergency services provision to this youth
3. Accountability for political intimidation
4. Systemic reform of child protection in Quebec

This case will be documented and shared with UN Human Rights mechanisms. Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
    {
        'filename': '20_BC_Ministry_of_Indigenous_Relations.docx',
        'to': 'mir@gov.bc.ca',
        'subject': 'Orange Shirt Day 2026: Accountability for Orange Shirt Movement Registration',
        'body': '''Dear BC Ministry of Indigenous Relations,

BC is where the Orange Shirt Day movement is officially registered. This gives your ministry a special responsibility to ensure that Orange Shirt Day drives real reconciliation, not just marketing.

A First Nations youth in Quebec has been denied justice for 5+ years. Stabbed three times, he received no psychological support, no education recovery, and no government accountability. While your province hosts the Orange Shirt movement, Indigenous families are abandoned.

We demand:
1. BC funding for Justice for Barran's legal defense fund
2. Investigation into systemic failures affecting Indigenous youth across Canada
3. Real reconciliation action beyond awareness campaigns
4. Accountability for government institutions that fail Indigenous children
5. Orange Shirt movement oversight to ensure real impact, not performative activism

Your response will be publicly tracked at: www.justiceforbarran.com/sponsor-response-tracker

BC has registered the Orange Shirt movement. Will BC ensure it drives real accountability?

Respectfully,
[Your Name]
Justice for Barran Campaign'''
    },
]

# Generate Word documents
for template in templates:
    doc = Document()
    
    # Set up document margins
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(1)
        section.bottom_margin = Inches(1)
        section.left_margin = Inches(1)
        section.right_margin = Inches(1)
    
    # Add header
    header = doc.add_heading('Justice for Barran - Email Template', 0)
    header.alignment = WD_ALIGN_PARAGRAPH.CENTER
    
    # Add metadata
    meta = doc.add_paragraph()
    meta.add_run('To: ').bold = True
    meta.add_run(template['to'])
    
    meta = doc.add_paragraph()
    meta.add_run('Subject: ').bold = True
    meta.add_run(template['subject'])
    
    # Add separator
    doc.add_paragraph('_' * 80)
    
    # Add body
    body_para = doc.add_paragraph(template['body'])
    body_para.style = 'Normal'
    
    # Add footer
    doc.add_paragraph('_' * 80)
    footer = doc.add_paragraph()
    footer.add_run('Campaign Website: ').bold = True
    footer.add_run('www.justiceforbarran.com\n')
    footer.add_run('Response Tracker: ').bold = True
    footer.add_run('www.justiceforbarran.com/sponsor-response-tracker\n')
    footer.add_run('Campaign Status: ').bold = True
    footer.add_run('LIVE - March 31, 2026')
    
    # Save document
    filepath = os.path.join(output_dir, template['filename'])
    doc.save(filepath)
    print(f"✅ Created: {template['filename']}")

print(f"\n✅ All 20 email templates created in: {output_dir}")
print(f"📁 Total files: {len(templates)}")
