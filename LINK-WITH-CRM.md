# Link with Ronch CRM (work orders)

- **MI Line:** choose the running Ronch CRM work order in the **Work order (Ronch CRM)** box under the counters. Only open CRM work orders are listed; the choice is remembered on that PC. Scanning without a WO is refused.
- The first board on a WO fixes its model (product type, control, version, wattage, current). A board of another model is refused. Customer, warranty, wire and housing may differ (one WO can club several customers' orders).
- The banner shows the count, e.g. **WO-0012 · 37 of 500**. Going over the WO quantity is allowed but shown in amber.
- From then on every PCBA, hi-pot, ageing and final result, every repair or scrap at the repair bench, and packing, is added to that WO's counters in `tr_wostats`. Ronch CRM reads those counters; it never reads the unit records, so the link costs almost nothing in Firebase reads.
- Deleting units (admin) takes their counts back off their WOs. Unpairing a driver (admin) moves its last pass to a fail, so the CRM sees it go to rework.
- Boards scanned at MI Line before this update have no WO and are not counted in the CRM.
- `firestore.rules` is one file for both apps; it adds `tr_wostats`. Publish it once in Firebase.
- Not linked when the app runs in "this computer only" mode (no Firebase).
