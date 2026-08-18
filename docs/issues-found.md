# Issues Found - Devfolio Scraper Output

## 1. Missing Deadlines

Some opportunities contain a deadline field while others do not.

Impact:
- Users cannot reliably sort opportunities by deadline.


## 2. Incorrect Organizer Information

Several records return "Code of Conduct" as the organizer instead of the actual organizing company or community.

Impact:
- Organizer data is inaccurate.


## 3. Inconsistent Prize Data

Some opportunities contain prize values while many others do not.

Impact:
- Prize-based filtering is unreliable.


## 4. Missing Mode Information

Some opportunities include mode information (Online/In-person) while others do not.

Impact:
- Users cannot consistently filter by event format.


## 5. No Standard Structure Across Records

Different opportunities return different combinations of fields.

Impact:
- Data must be normalized before displaying in Oppora.


## Future Solution

Oppora will include:

- Data validation
- Health monitoring
- Missing field detection
- Self-healing scraper workflows
- Standardized opportunity schema

## 6. MLH Event List Extraction

Initial scraper only extracted a single event from the MLH events page despite multiple events being visible.

Impact:
- Incomplete opportunity coverage.

Potential Cause:
- The scraper identified only the first event card instead of iterating through all event listings.

Future Solution:
- Improve extraction prompt and validate expected record counts.

## 7. MLH Multi-Event Extraction

Two scraper attempts were able to extract event information successfully,
but only one event record was returned despite multiple events existing on the page.

Status:
Needs investigation.

Potential causes:
- Dynamic content loading
- Nested event structure
- Scraper selecting featured event instead of event collection

Impact:
Incomplete source coverage.
