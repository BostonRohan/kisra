import csv
import json

# Create a CSV file with all the partnership data for easy management
partnerships_data = [
    # Program Partnerships
    ['Program Partnership', 'WV Military Authority', 'Supporting veterans\' transition and employment programs', 'Employment', 'www.wv.gov/military'],
    ['Program Partnership', 'WV Jobs and Hope Program', 'Providing job training and placement services for TANF recipients', 'Employment', 'dhhr.wv.gov/bcf/Services/familyassistance/Pages/WVJobsandHope.aspx'],
    ['Program Partnership', 'West Side Mentoring', 'Youth mentoring and development programs', 'Learning', 'www.westsidementoring.org'],
    ['Program Partnership', 'PAAC - Partnership of African American Churches', 'Faith-based community outreach and support services', 'Health', 'www.paacwv.org'],
    ['Program Partnership', 'WVSU - West Virginia State University', 'Educational partnerships and student development programs', 'Learning', 'www.wvstateu.edu'],
    ['Program Partnership', 'Vandalia, LLC', 'Business development and employment services', 'Asset Development', 'www.vandalia.com'],
    ['Program Partnership', 'West Virginia Division of Rehabilitation Services (DRS)', 'Vocational rehabilitation and disability services', 'Employment', 'www.wvdrs.org'],
    
    # Funder Partnerships
    ['Funder Partnership', 'WV DHHR - West Virginia Department of Health and Human Resources', 'State funding for health and social services programs', 'Health', 'dhhr.wv.gov'],
    ['Funder Partnership', 'USDA - United States Department of Agriculture', 'Federal funding for nutrition and rural development programs', 'Asset Development', 'www.usda.gov'],
    ['Funder Partnership', 'WVHDF - West Virginia Housing Development Fund', 'Housing assistance and asset development programs', 'Asset Development', 'www.wvhdf.com'],
    ['Funder Partnership', 'TGKVF - The Greater Kanawha Valley Foundation', 'Local foundation supporting community development initiatives', 'Asset Development', 'www.tgkvf.org']
]

# Create CSV file
with open('kisra_partnerships.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Partnership Type', 'Organization Name', 'Description', 'HEAL Program Area', 'Website'])
    writer.writerows(partnerships_data)

print("Created kisra_partnerships.csv")

# Create events data CSV
events_data = [
    ['Community Health Fair', 'June 15, 2025', '10:00 AM - 3:00 PM', 'Charleston Community Center', 'Free health screenings, wellness education, and mental health resources for families', 'Health', 'Yes', 'Dr. Sarah Johnson', '304-555-0123'],
    ['Job Skills Workshop', 'June 22, 2025', '9:00 AM - 4:00 PM', 'KISRA Main Office', 'Resume writing, interview preparation, and job search strategies', 'Employment', 'Yes', 'Career Services Team', '304-555-0124'],
    ['Financial Literacy Seminar', 'July 8, 2025', '6:00 PM - 8:00 PM', 'Virtual Event', 'Learn budgeting, saving strategies, and homeownership preparation', 'Asset Development', 'Yes', 'Financial Advisor Mary Smith', '304-555-0125'],
    ['Youth Leadership Summit', 'July 20, 2025', '8:00 AM - 5:00 PM', 'WVSU Campus', 'Leadership development and college preparation for high school students', 'Learning', 'Yes', 'WVSU Student Services', '304-555-0126'],
    ['Community Garden Project', 'August 5, 2025', '9:00 AM - 12:00 PM', 'Dunbar Community Garden', 'Learn sustainable gardening and nutrition education', 'Health', 'No', 'Community Volunteers', '304-555-0127'],
    ['Small Business Workshop', 'August 12, 2025', '1:00 PM - 5:00 PM', 'Charleston Business Center', 'Entrepreneurship training and micro-business development', 'Asset Development', 'Yes', 'Business Development Team', '304-555-0128']
]

with open('kisra_events.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Event Name', 'Date', 'Time', 'Location', 'Description', 'HEAL Program Area', 'Registration Required', 'Contact Person', 'Phone'])
    writer.writerows(events_data)

print("Created kisra_events.csv")

# Display the data for review
print("\n=== PARTNERSHIPS DATA ===")
import pandas as pd
partnerships_df = pd.read_csv('kisra_partnerships.csv')
print(partnerships_df.to_string(index=False))

print("\n=== EVENTS DATA ===")
events_df = pd.read_csv('kisra_events.csv')
print(events_df.to_string(index=False))

print(f"\nTotal Program Partnerships: {len(partnerships_df[partnerships_df['Partnership Type'] == 'Program Partnership'])}")
print(f"Total Funder Partnerships: {len(partnerships_df[partnerships_df['Partnership Type'] == 'Funder Partnership'])}")
print(f"Total Upcoming Events: {len(events_df)}")