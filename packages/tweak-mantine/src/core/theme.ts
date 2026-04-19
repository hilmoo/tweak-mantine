import {
  Accordion,
  Alert,
  AngleSlider,
  AppShell,
  Autocomplete,
  Badge,
  Breadcrumbs,
  Card,
  Checkbox,
  CheckboxCard,
  CheckboxIndicator,
  Chip,
  CloseButton,
  Code,
  ColorInput,
  ColorPicker,
  ColorSwatch,
  Combobox,
  createTheme,
  Divider,
  Fieldset,
  HoverCard,
  Indicator,
  Input,
  InputClearButton,
  Kbd,
  Menu,
  MultiSelect,
  NavLink,
  Notification,
  NumberInput,
  Pagination,
  Paper,
  PasswordInput,
  Pill,
  Popover,
  Progress,
  Radio,
  RadioCard,
  RadioIndicator,
  RangeSlider,
  Rating,
  RingProgress,
  ScrollArea,
  SegmentedControl,
  Select,
  SemiCircleProgress,
  Skeleton,
  Slider,
  Stepper,
  Switch,
  Table,
  TableOfContents,
  Tabs,
  TagsInput,
  Textarea,
  Timeline,
  Tooltip,
  Tree,
  Typography,
} from "@mantine/core";
import style from "./theme.module.css";
import { variantColorsResolver } from "../color-function/variant-color-resolver";
import clsx from "clsx";
import { parseColor } from "../color-function/parseHelper";

export const TWEAK_CORE_THEME = createTheme({
  variantColorResolver: variantColorsResolver,
  components: {
    // sort based on https://github.com/hilmoo/mantine-reduce-css/blob/main/src/hierarchy.json
    AngleSlider: AngleSlider.extend({
      classNames: {
        root: style["angle-slider-root"],
        mark: style["angle-slider-mark"],
        thumb: style["angle-slider-thumb"],
      },
    }),
    AppShell: AppShell.extend({
      // @ts-expect-error
      vars: () => ({
        root: {
          "--app-shell-border-color": "var(--mantine-color-default-border)",
        },
      }),
    }),
    // AspectRatio
    // Avatar
    // BackgroundImage
    Badge: Badge.extend({
      vars: (theme, props) => {
        if (props.variant === "dot") {
          return {
            root: {
              "--badge-dot-color": parseColor({
                color: props.color,
                theme,
                shade: 8,
                fallback: `var(--mantine-color-${theme.primaryColor}-8)`,
              }),
            },
          };
        }
        return { root: {} };
      },
      classNames: {
        root: style["badge-root"],
      },
    }),
    // Blockquote
    Breadcrumbs: Breadcrumbs.extend({
      classNames: {
        separator: style["breadcrumbs-separator"],
      },
    }),
    // Center
    CheckboxCard: CheckboxCard.extend({
      classNames: {
        card: style["checkbox-card-card"],
      },
    }),
    // CheckboxGroup
    CheckboxIndicator: CheckboxIndicator.extend({
      vars: (theme, props) => ({
        indicator: {
          "--checkbox-icon-color": parseColor({
            color: props.color,
            theme,
            shade: 7,
            fallback: "var(--mantine-primary-color-filled-hover)",
          }),
          "--checkbox-color": parseColor({
            color: props.color,
            theme,
            shade: 9,
            fallback: "var(--mantine-color-text)",
          }),
        },
      }),
      classNames: {
        indicator: style["checkbox-indicator-indicator"],
      },
    }),
    Code: Code.extend({
      vars: (theme, props) => ({
        root: {
          "--code-bg": parseColor({
            color: props.color,
            theme,
            shade: 0,
            fallback: "var(--mantine-color-default)",
          }),
        },
      }),
    }),
    // Collapse
    ColorSwatch: ColorSwatch.extend({
      classNames: {
        root: style["color-swatch-root"],
      },
    }),
    // Container
    // CopyButton
    Divider: Divider.extend({
      vars: (theme, props) => ({
        root: {
          "--divider-color": parseColor({
            color: props.color,
            theme,
            shade: 3,
            fallback: "var(--mantine-color-default-border)",
          }),
        },
      }),
      classNames: {
        label: style["divider-label"],
      },
    }),
    Fieldset: Fieldset.extend({
      classNames: {
        root: style["fieldset-root"],
      },
    }),
    // FileButton
    // Flex
    // FloatingIndicator
    // Grid
    // Group
    // Image
    Indicator: Indicator.extend({
      vars: (theme, props) => ({
        root: {
          "--indicator-text-color": parseColor({
            color: props.color,
            theme,
            shade: 8,
            fallback: `var(--mantine-color-${theme.primaryColor}-8)`,
          }),
        },
      }),
    }),
    // InlineInput
    // InputsGroupFieldset
    Kbd: Kbd.extend({
      classNames: {
        root: style["kbd-root"],
      },
    }),
    // List
    // Loader
    // Mark
    // NumberFormatter
    // Overlay
    Paper: Paper.extend({
      // @ts-expect-error Mantine types are not up to date
      vars: (theme, props) => ({
        root: {
          "--paper-border-color": parseColor({
            // @ts-expect-error Mantine types are not up to date
            color: props.color,
            theme,
            shade: 3,
            fallback: "var(--mantine-color-default-border)",
          }),
        },
      }),
      // classNames: {
      //   root: style["paper-root"],
      // },
    }),
    Card: Card.extend({
      classNames: {
        root: style["card-root"],
        section: style["card-section"],
      },
    }),
    // Portal
    // Affix
    Progress: Progress.extend({
      classNames: {
        root: style["progress-root"],
      },
    }),
    RadioCard: RadioCard.extend({
      classNames: {
        card: style["radio-card-root"],
      },
    }),
    // RadioGroup
    RadioIndicator: RadioIndicator.extend({
      vars: (theme, props) => ({
        indicator: {
          // "--radio-icon-color": parseColor({
          //   color: props.color,
          //   theme,
          //   shade: 6,
          //   fallback: "var(--mantine-primary-color-filled)",
          // }),
          "--radio-color": parseColor({
            color: props.color,
            theme,
            shade: 6,
            fallback: "var(--mantine-primary-color-filled)",
          }),
        },
      }),
      classNames: {
        indicator: style["radio-indicator-indicator"],
      },
    }),
    Rating: Rating.extend({
      classNames: {
        starSymbol: style["rating-star-symbol"],
      },
    }),
    ScrollArea: ScrollArea.extend({
      classNames: {
        scrollbar: style["scroll-area-scrollbar"],
        corner: style["scroll-area-corner"],
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: (theme, props) => ({
        root: {
          "--sc-color": parseColor({
            color: props.color,
            theme,
            shade: 3,
            fallback: "var(--mantine-neutral-color-3)",
          }),
        },
      }),
      classNames: {
        root: style["segmented-control-root"],
        label: style["segmented-control-label"],
        control: style["segmented-control-control"],
      },
    }),
    SemiCircleProgress: SemiCircleProgress.extend({
      vars: (theme, props) => ({
        root: {
          "--scp-empty-segment-color": parseColor({
            color: props.color,
            theme,
            shade: 0,
            fallback: "var(--mantine-color-body-secondary)",
          }),
        },
      }),
    }),
    // SimpleGrid
    Skeleton: Skeleton.extend({
      classNames: {
        root: style["skeleton-root"],
      },
    }),
    // Space
    // Stack
    Table: Table.extend({
      vars: (theme, props) => ({
        table: {
          "--table-border-color": parseColor({
            color: props.color,
            theme,
            shade: 3,
            fallback: "var(--mantine-color-default-border)",
          }),
          "--table-striped-color": parseColor({
            color: props.color,
            theme,
            shade: 0,
            fallback: "var(--mantine-neutral-color-0)",
          }),
          "--table-highlight-on-hover-color": parseColor({
            color: props.color,
            theme,
            shade: 1,
            fallback: "var(--mantine-neutral-color-1)",
          }),
        },
      }),
      classNames: (_, props) => ({
        th: clsx(props.variant === "vertical" && style["table-th-vertical"]),
      }),
    }),
    // Text
    // Anchor
    // Highlight
    // Spoiler
    // ThemeIcon
    Timeline: Timeline.extend({
      classNames: {
        item: style["timeline-item"],
        itemBullet: style["timeline-item-bullet"],
      },
    }),
    // Title
    // Transition
    // LoadingOverlay
    // ModalBase
    // Drawer
    // Modal
    Slider: Slider.extend({
      classNames: {
        label: style["slider-label"],
        track: style["slider-track"],
        bar: style["slider-bar"],
        mark: style["slider-mark"],
        markLabel: style["slider-mark-label"],
      },
    }),
    RangeSlider: RangeSlider.extend({
      classNames: {
        label: style["slider-label"],
        track: style["slider-track"],
        bar: style["slider-bar"],
        mark: style["slider-mark"],
        markLabel: style["slider-mark-label"],
      },
    }),
    Tooltip: Tooltip.extend({
      classNames: {
        tooltip: style["tooltip-tooltip"],
      },
    }),
    RingProgress: RingProgress.extend({
      classNames: {
        curve: style["ring-progress-curve"],
      },
    }),
    Tree: Tree.extend({
      classNames: {
        label: style["tree-label"],
      },
    }),
    Typography: Typography.extend({
      classNames: {
        root: style["typography-root"],
      },
    }),
    // UnstyledButton
    Accordion: Accordion.extend({
      classNames: (_, props) => ({
        control: clsx(
          (props.variant === "contained" || props.variant === "default") &&
            style["accordion-control-default"],
        ),
        item: clsx(
          style["accordion-item"],
          props.variant === "separated" && [style["accordion-item-separated"]],
        ),
      }),
    }),
    // ActionIcon
    // Burger
    // Button
    CloseButton: CloseButton.extend({
      classNames: (_, props) => ({
        root: clsx(
          style["close-button-root"],
          props.variant === "subtle" && style["close-button-root-subtle"],
        ),
      }),
    }),
    Alert: Alert.extend({
      vars: (theme, props) => {
        if (props.variant === "white") {
          return {
            root: {
              "--alert-color": parseColor({
                color: props.color,
                theme,
                shade: 6,
                fallback: "var(--mantine-primary-color-filled)",
              }),
            },
          };
        }
        return { root: {} };
      },
    }),
    // Dialog
    Input: Input.extend({
      classNames: {
        input: style["input-input"],
      },
    }),
    InputClearButton: InputClearButton.extend({
      vars: () => ({
        root: {
          "--input-bd": "var(--mantine-color-default-border)",
          "--input-bg": "transparent",
        },
      }),
    }),
    Checkbox: Checkbox.extend({
      vars: (theme, props) => {
        if (props.variant === "outline") {
          return {
            root: {
              "--checkbox-color": parseColor({
                color: props.color,
                theme,
                shade: 8,
                fallback: `var(--mantine-color-${theme.primaryColor}-8)`,
              }),
            },
          };
        }
        return {
          root: {},
        };
      },
      classNames: {
        input: style["checkbox-input"],
      },
    }),
    Chip: Chip.extend({
      classNames: (_, props) => ({
        label: clsx(
          style["chip-label"],
          props.variant === "outline" && style["chip-label-outline"],
        ),
      }),
    }),
    ColorPicker: ColorPicker.extend({
      classNames: {
        slider: style["color-picker-slider"],
        swatch: style["color-picker-swatch"],
      },
    }),
    // FileInput
    // InputBase
    NavLink: NavLink.extend({
      vars: (_, props) => {
        if ((props.variant === undefined || props.variant === "light") && !props.color) {
          return {
            root: {
              "--nl-bg": "var(--mantine-primary-color-light)",
              "--nl-hover": "var(--mantine-primary-color-light-hover)",
              "--nl-color": "var(--mantine-color-text)",
            },
            children: {},
          };
        }
        return {
          root: {},
          children: {},
        };
      },
      classNames: {
        root: style["navlink-root"],
      },
    }),
    Notification: Notification.extend({
      classNames: {
        root: style["notification-root"],
        title: style["notification-title"],
        description: style["notification-description"],
      },
    }),
    NumberInput: NumberInput.extend({
      classNames: {
        control: style["number-input-control"],
      },
    }),
    Pagination: Pagination.extend({
      classNames: {
        control: style["pagination-control"],
      },
    }),
    PasswordInput: PasswordInput.extend({
      classNames: {
        visibilityToggle: style["password-input-visibility-toggle"],
      },
    }),
    Pill: Pill.extend({
      classNames: {
        root: style["pill-root"],
      },
    }),
    // PinInput
    Radio: Radio.extend({
      vars: (theme, props) => {
        if (props.variant === "outline") {
          return {
            root: {
              "--radio-color": parseColor({
                color: props.color,
                theme,
                shade: 8,
                fallback: `var(--mantine-color-${theme.primaryColor}-8)`,
              }),
            },
          };
        }
        return {
          root: {},
        };
      },
    }),
    Stepper: Stepper.extend({
      classNames: {
        root: style["stepper-root"],
        separator: style["stepper-separator"],
        verticalSeparator: style["stepper-vertical-separator"],
        stepIcon: style["stepper-step-icon"],
      },
    }),
    Switch: Switch.extend({
      classNames: {
        track: style["switch-track"],
        thumb: style["switch-thumb"],
      },
    }),
    TableOfContents: TableOfContents.extend({
      classNames: {
        control: style["table-of-contents-control"],
      },
    }),
    Tabs: Tabs.extend({
      // @ts-expect-error Mantine types are not up to date
      vars: () => ({
        root: {
          "--tab-border-color": "var(--mantine-color-default-border)",
          "--tab-hover-color": "var(--mantine-color-default-hover)",
        },
      }),
    }),
    // TextInput
    Textarea: Textarea.extend({
      classNames: {
        wrapper: style["textarea-wrapper"],
      },
    }),
    // JsonInput
    // VisuallyHidden
    // FocusTrap
    Popover: Popover.extend({
      classNames: {
        dropdown: style["popover-dropdown"],
        arrow: style["popover-arrow"],
      },
    }),
    ColorInput: ColorInput.extend({
      classNames: {
        dropdown: style["color-input-dropdown"],
        eyeDropperButton: style["color-input-eye-dropper-button"],
      },
    }),
    Combobox: Combobox.extend({
      classNames: {
        option: style["combobox-option"],
        search: style["combobox-search"],
        header: style["combobox-header-footer"],
        footer: style["combobox-header-footer"],
        groupLabel: style["combobox-group-label"],
      },
    }),
    Autocomplete: Autocomplete.extend({
      classNames: {
        option: style["combobox-option"],
        input: style["input-input"],
      },
    }),
    HoverCard: HoverCard.extend({
      classNames: {
        dropdown: style["popover-dropdown"],
      },
    }),
    Menu: Menu.extend({
      classNames: {
        dropdown: style["popover-dropdown"],
        divider: style["menu-divider"],
        item: style["menu-item"],
        arrow: style["popover-arrow"],
      },
    }),
    MultiSelect: MultiSelect.extend({
      classNames: {
        option: style["combobox-option"],
        input: style["input-input"],
      },
    }),
    // NativeSelect
    Select: Select.extend({
      classNames: {
        option: style["combobox-option"],
        input: style["input-input"],
      },
    }),
    TagsInput: TagsInput.extend({
      classNames: {
        option: style["combobox-option"],
        input: style["input-input"],
      },
    }),
  },
});
