# 1. Create target

[create-target.feature](cypress/e2e/create-target.feature)

- [x] Create target with name, quantity, measurement and period of time (Symbolic and Specific Dates)
  - Name
  - Target Quantity
  - Measurement
  - Period
- [x] Save create target to DB

---

# 2. Target overview

[Target overview](cypress/e2e/target-overview.feature)

## 2.1. See name

- [x] Display name on the card

## 2.2. See common quantity, measurement

- [x] Display quantity and measurement on the card

## 2.3. Period

### 2.3.1. See symbolic period

- [x] Display symbolic period

### 2.3.2. See exact dates

- [ ] Calculate dates for Symbolic
- [ ] Display selected dates for Date Range

## 2.4. Today

### 2.4.1. See target for today

- [ ] Done

### 2.4.2. See reached quantity today

- [ ] Done

### 2.4.3. See remaining quantity today

- [ ] Done

### 2.4.4. See reached weight of the day

- [ ] Done

### 2.4.5. See target weight of the day

- [ ] Done

Should be zero when reached >= target

## 2.6. Overall

### 2.6.1. See remaining quantity overall

- [ ] Done

### 2.6.2. See reached quantity overall

- [ ] Done

## 2.7. See target for next 5 days

- [ ] Done

Should display day + week day

## 2.8. Calendar

### 2.8.1 See reached number at past days and today

- [ ] Done

### 2.8.2 See target number at future days and today

- [ ] Done

### 2.8.2 See target number at past days as greyed out

- [ ] Done

### 2.8.2 See start and end of period

- [ ] Done

## 2.9. See date of creation

- [ ] Done

---

# 3. Define reached quantity

## 3.1 Define for today

- [ ] Done

number input with arrows

## 3.2 Define for past days

- [ ] Done

Select date on calendar, define reached quantity only for past days

## 3.3 Define for unknown day

- [ ] Done

Input for unknown day reached quantity

Defined reached quantity in the past decrease number at unknown day automatically

Example:

| Step                             | -3     | -2     | -1     | Today | 1     | Unknown |
|----------------------------------|--------|--------|--------|-------|-------|---------|
| 1. Initially:                    | .. / 5 | .. / 5 | .. / 5 | * / 5 | 0 / 5 | 0       |
| 2. Define one past day:          | .. / 5 | 2 / 5  | .. / 5 | * / 5 | 0 / 5 | 0       |
| 3. Define unknown day as 20:     | .. / 5 | 2 / 5  | .. / 5 | * / 5 | 0 / 5 | 20      | 
| 4. Define other past day with 3: | 3 / 5  | 2 / 5  | .. / 5 | * / 5 | 0 / 5 | 17      | 

Unknown day changed from 20 to 17

---

# 4. Target calculation

- [ ] Done

Target distributes equally between each day, the remaining getting to near days

### Example:

Target 18 for 5 days

Distribution will be the following:

4, 4, 4, 3, 3

---

# 5. Target actions

## 5.1. Edit target

- [ ] Done

- Able to edit each field
- Change of target will affect targets only for today and future days
- Change of period will affect targets only for today and future

## 5.2. Close target

- [ ] Done

Will be moved from dashboard to separate list

## 5.3. Reopen target

- [ ] Done

Will moved target back to dashboard

## 5.4. Delete target

- [ ] Done

Delete target at all (hard delete)

---

# 6. Target dashboard

## 6.1. See active targets

- [ ] Done

## 6.2. See closed targets

- [ ] Done

## 6.3. Active targets reordering

- [ ] Done

ordering by up|down arrows

---

# 7. Define target weight of day

- By default, each day have weight = 1

- You can mark some day by 0 weight,
  it means that this day will not be taken to account, as vacation

- Or you can mark the day by weight >1
  and such day will have higher target like a much productive day

## 7.1 Define target weight on create/edit form

- [ ] Done

min 0, max 3

1. Enter target weight
2. Click to day on calendar to set weight

## 7.2 Adjust current weight of day based on reached value.

- [ ] Done

---

# 8. Integration with GitHub

- [ ] Done
