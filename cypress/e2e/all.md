# Feature: 1. Create target

Create target with name, quantity, measurement and period of time (Symbolic and Specific Dates)

- Name
- Target Quantity
- Measurement
- Period

# Feature: 2. Target overview

## Feature: 2.1. See name

## Feature: 2.2. See common quantity, measurement

## Feature: 2.3. Period

### Feature: 2.3.1. See symbolic period

### Feature: 2.3.2. See exact dates

Calculate dates for Symbolic
Display selected dates for Date Range

## Feature: 2.4. Today

### Feature: 2.4.1. See target for today

### Feature: 2.4.2. See reached quantity today

### Feature: 2.4.3. See remaining quantity today

### Feature: 2.4.4. See reached weight of the day

### Feature: 2.4.5. See target weight of the day

Should be zero when reached >= target

## Feature: 2.6. Overall

### Feature: 2.6.1. See remaining quantity overall

### Feature: 2.6.2. See reached quantity overall

## Feature: 2.7. See target for next 5 days

Should display day + week day

## Feature: 2.8. Calendar

### Feature: 2.8.1 See reached number at past days and today

### Feature: 2.8.2 See target number at future days and today

### Feature: 2.8.2 See target number at past days as greyed out

### Feature: 2.8.2 See start and end of period

## Feature: 2.9. See date of creation

# Feature: 3. Define reached quantity

## Feature: 3.1 Define for today

number input with arrows

## Feature: 3.2 Define for past days

Select date on calendar, define reached quantity only for past days

## Feature: 3.3 Define for unknown day

input for unknown day reached quantity
defined reached quantity in the past decrease number at unknown day automatically
example: |reached,target|, * - today, "?" - unknown day

| Step                             | -3  | -2  | -1  | 0   | 1   | Unknown |
|----------------------------------|-----|-----|-----|-----|-----|---------|
| 1. Initially:                    | _,5 | _,5 | _,5 | *,5 | 0,5 |         |
| 2. Define one past day:          | _,5 | 2,5 | _,5 | *,5 | 0,5 |         |
| 3. Define unknown day as 20:     | _,5 | 2,5 | _,5 | *,5 | 0,5 | 20 ?    | 
| 4. Define other past day with 3: | 3,5 | 2,5 | _,5 | *,5 | 0,5 | 17 ?    | 

Unknown day changed from 20 to 17

# Feature: 4. Target calculation

Target distributes equally between each day, the remaining getting to near days
example: target 18 for 5 days, distribution will be the following:

4, 4, 4, 3, 3

# Feature: 5. Target actions

## Feature: 5.1. Edit target

Able to edit each field
Change of target will affect targets only for today and future days
Change of period will affect targets only for today and future

## Feature: 5.2. Close target

Will be moved from dashboard to separate list

## Feature: 5.3. Reopen target

Will moved target back to dashboard

## Feature: 5.4. Delete target

Delete target at all (hard delete)

# Feature: 6. Target dashboard

## Feature: 6.1. See active targets

## Feature: 6.2. See closed targets

## Feature: 6.3. Active targets reordering

ordering by up|down arrows

# Feature: 7. Define target weight of day

By default, each day have weight = 1

You can mark some day by 0 weight,
it means that this day will not be taken to account, as vacation

Or you can mark the day by weight >1
and such day will have higher target like a much productive day

## Feature: 7.1 Define target weight on create/edit form

min 0, max 3

1. Enter target weight
2. Click to day on calendar to set weight

## Feature: 7.2 Adjust current weight of day based on reached value.

# Feature: 8. Integration with GitHub
