Feature: 1. Create target
# Create target with name, quantity, measurement and period of time (Symbolic and Specific Dates)

Feature: 2. Target overview
Feature: 2.1. See name, common quantity, measurement, period
Feature: 2.2. See target for today
Feature: 2.3. See reached quantity today
Feature: 2.4. See remaining quantity today
Feature: 2.5. See remaining quantity overall
Feature: 2.6. See reached quantity overall
Feature: 2.7. See target for next 5 days

Feature: 3. Define reached quantity
Feature: 3.1 Define for today
Feature: 3.2 Define for past days
Feature: 3.3 Define for unknown day

Feature: 4. Target calculation
# Target distributes equally between each day, the remaining getting to near days
# example: target 18 for 5 days, distribution will be the following:
# 4, 4, 4, 3, 3

Feature: 5. Define weight of day
  # By default, each day have weight = 1
  # You can mark some day by 0 weight,
  # it means that this day will not be taken to account, as vacation
  # Or you can mark the day by weight >1
  # and such day will have higher target like a much productive day

Feature: 6. Integration with GitHub
