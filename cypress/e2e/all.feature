Feature: 1. Create target
# Create target with name, quantity, measurement and period of time (Symbolic and Specific Dates)

Feature: 2. Target overview
Feature: 2.1. See name
Feature: 2.2. See common quantity, measurement
Feature: 2.3. Period
Feature: 2.3.1. See symbolic period
Feature: 2.3.2. See exact dates
Feature: 2.4. Today
Feature: 2.4.1. See target for today
Feature: 2.4.2. See reached quantity today
Feature: 2.4.3. See remaining quantity today
Feature: 2.6. Overall
Feature: 2.6.1. See remaining quantity overall
Feature: 2.6.2. See reached quantity overall
Feature: 2.7. See target for next 5 days

Feature: 3. Define reached quantity
Feature: 3.1 Define for today
Feature: 3.2 Define for past days
Feature: 3.3 Define for unknown day

Feature: 4. Target calculation
# Target distributes equally between each day, the remaining getting to near days
# example: target 18 for 5 days, distribution will be the following:
# 4, 4, 4, 3, 3

Feature: 5. Target actions
Feature: 5.1. Edit target
Feature: 5.2. Close target
Feature: 5.3. Reopen target
Feature: 5.4. Delete target

Feature: 5. Target dashboard
Feature: 5.1. See active targets
Feature: 5.2. See closed targets
Feature: 5.3. Active targets reordering

Feature: 6. Define weight of day
  # By default, each day have weight = 1
  # You can mark some day by 0 weight,
  # it means that this day will not be taken to account, as vacation
  # Or you can mark the day by weight >1
  # and such day will have higher target like a much productive day

Feature: 7. Integration with GitHub
