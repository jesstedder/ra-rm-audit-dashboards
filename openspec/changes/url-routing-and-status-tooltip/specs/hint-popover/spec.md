# Capability: Hint Popover

A reusable UI component that displays explanatory hint text in a styled popover on hover and on click, replacing native `title` attribute tooltips.

---

## ADDED Requirements

### Requirement: Hint popover opens on hover

The `HintPopover` component SHALL display its content when the user hovers over the trigger element.

#### Scenario: Hover reveals popover
- **WHEN** the user moves the pointer over the hint trigger icon
- **THEN** the popover appears with the hint text visible

#### Scenario: Pointer leaves closes popover (unless latched)
- **WHEN** the user moves the pointer away from the trigger and the popover is not click-latched
- **THEN** the popover closes

### Requirement: Hint popover latches open on click

The `HintPopover` component SHALL remain open when the user clicks the trigger, regardless of pointer position.

#### Scenario: Click latches popover open
- **WHEN** the user clicks the hint trigger icon
- **THEN** the popover stays open after the pointer moves away

#### Scenario: Click-outside dismisses latched popover
- **WHEN** the popover is latched open and the user clicks anywhere outside it
- **THEN** the popover closes

#### Scenario: Escape key dismisses latched popover
- **WHEN** the popover is latched open and the user presses the Escape key
- **THEN** the popover closes

### Requirement: Hint popover uses Verdant Estate styling

The popover SHALL be styled using the project's CSS variable palette (not raw colour values), and SHALL include a directional caret pointing toward the trigger.

#### Scenario: Popover visual appearance
- **WHEN** the popover is visible
- **THEN** it renders with a background of `--color-bark`, text in `--color-ivory`, font `--font-ui`, and a small downward caret pointing at the trigger icon
