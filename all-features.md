# 1. Create target

[create-target.feature](cypress/e2e/create-target.feature)

Create target with name, quantity, measurement and period of time (Symbolic and Specific Dates)

- Name
- Target Quantity
- Measurement
- Period

# 2. Target overview

[Target overview](cypress/e2e/target-overview.feature)

## 2.1. See name

## 2.2. See common quantity, measurement

## 2.3. Period

### 2.3.1. See symbolic period

### 2.3.2. See exact dates

Calculate dates for Symbolic
Display selected dates for Date Range

## 2.4. Today

### 2.4.1. See target for today

### 2.4.2. See reached quantity today

### 2.4.3. See remaining quantity today

### 2.4.4. See reached weight of the day

### 2.4.5. See target weight of the day

Should be zero when reached >= target

## 2.6. Overall

### 2.6.1. See remaining quantity overall

### 2.6.2. See reached quantity overall

## 2.7. See target for next 5 days

Should display day + week day

## 2.8. Calendar

### 2.8.1 See reached number at past days and today

### 2.8.2 See target number at future days and today

### 2.8.2 See target number at past days as greyed out

### 2.8.2 See start and end of period

## 2.9. See date of creation

# 3. Define reached quantity

## 3.1 Define for today

number input with arrows

## 3.2 Define for past days

Select date on calendar, define reached quantity only for past days

## 3.3 Define for unknown day

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

# 4. Target calculation

Target distributes equally between each day, the remaining getting to near days
example: target 18 for 5 days, distribution will be the following:

4, 4, 4, 3, 3

# 5. Target actions

## 5.1. Edit target

Able to edit each field
Change of target will affect targets only for today and future days
Change of period will affect targets only for today and future

## 5.2. Close target

Will be moved from dashboard to separate list

## 5.3. Reopen target

Will moved target back to dashboard

## 5.4. Delete target

Delete target at all (hard delete)

# 6. Target dashboard

## 6.1. See active targets

## 6.2. See closed targets

## 6.3. Active targets reordering

ordering by up|down arrows

# 7. Define target weight of day

By default, each day have weight = 1

You can mark some day by 0 weight,
it means that this day will not be taken to account, as vacation

Or you can mark the day by weight >1
and such day will have higher target like a much productive day

## 7.1 Define target weight on create/edit form

min 0, max 3

1. Enter target weight
2. Click to day on calendar to set weight

## 7.2 Adjust current weight of day based on reached value.

# 8. Integration with GitHub
