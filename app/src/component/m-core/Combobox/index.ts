import type { MantineDemo } from "@mantinex/demo";

import { usage as usageAutocomplete } from "./Autocomplete";
import { readOnly as readOnlyAutocomplete } from "./Autocomplete";
import { disabled as disabledAutocomplete } from "./Autocomplete";
import { configurator as configuratorAutocomplete } from "./Autocomplete";
import { error as errorAutocomplete } from "./Autocomplete";
import { sort as sortAutocomplete } from "./Autocomplete";
import { search as searchAutocomplete } from "./Autocomplete";
import { limit as limitAutocomplete } from "./Autocomplete";
import { scrollArea as scrollAreaAutocomplete } from "./Autocomplete";
import { groups as groupsAutocomplete } from "./Autocomplete";
import { disabledOptions as disabledOptionsAutocomplete } from "./Autocomplete";
import { sections as sectionsAutocomplete } from "./Autocomplete";
import { dropdownOpened as dropdownOpenedAutocomplete } from "./Autocomplete";
import { dropdownPosition as dropdownPositionAutocomplete } from "./Autocomplete";
import { dropdownAnimation as dropdownAnimationAutocomplete } from "./Autocomplete";
import { dropdownPadding as dropdownPaddingAutocomplete } from "./Autocomplete";
import { dropdownShadow as dropdownShadowAutocomplete } from "./Autocomplete";
import { withinPopover as withinPopoverAutocomplete } from "./Autocomplete";
import { renderOption as renderOptionAutocomplete } from "./Autocomplete";
import { clearable as clearableAutocomplete } from "./Autocomplete";
import { clearSectionMode as clearSectionModeAutocomplete } from "./Autocomplete";
import { selectFirstOptionOnChange as selectFirstOptionOnChangeAutocomplete } from "./Autocomplete";
import { autoSelectOnBlur as autoSelectOnBlurAutocomplete } from "./Autocomplete";
import { fuzzySearch as fuzzySearchAutocomplete } from "./Autocomplete";
import { loading as loadingAutocomplete } from "./Autocomplete";
import { autocomplete as autocompleteCombobox } from "./Combobox";
import { hiddenDropdown as hiddenDropdownCombobox } from "./Combobox";
import { select as selectCombobox } from "./Combobox";
import { searchableSelect as searchableSelectCombobox } from "./Combobox";
import { button as buttonCombobox } from "./Combobox";
import { buttonSearch as buttonSearchCombobox } from "./Combobox";
import { selectFirstOption as selectFirstOptionCombobox } from "./Combobox";
import { controlledDropdown as controlledDropdownCombobox } from "./Combobox";
import { activeOption as activeOptionCombobox } from "./Combobox";
import { nativeScroll as nativeScrollCombobox } from "./Combobox";
import { scrollArea as scrollAreaCombobox } from "./Combobox";
import { multiselect as multiselectCombobox } from "./Combobox";
import { searchableMultiselect as searchableMultiselectCombobox } from "./Combobox";
import { noDropdown as noDropdownCombobox } from "./Combobox";
import { groups as groupsCombobox } from "./Combobox";
import { dropdownPosition as dropdownPositionCombobox } from "./Combobox";
import { virtualized as virtualizedCombobox } from "./Combobox";
import { virtualizedTanstack as virtualizedTanstackCombobox } from "./Combobox";
import { usage as usageMultiSelect } from "./MultiSelect";
import { searchable as searchableMultiSelect } from "./MultiSelect";
import { maxValues as maxValuesMultiSelect } from "./MultiSelect";
import { hidePickedOptions as hidePickedOptionsMultiSelect } from "./MultiSelect";
import { nothingFound as nothingFoundMultiSelect } from "./MultiSelect";
import { checkIcon as checkIconMultiSelect } from "./MultiSelect";
import { configurator as configuratorMultiSelect } from "./MultiSelect";
import { disabled as disabledMultiSelect } from "./MultiSelect";
import { disabledOptions as disabledOptionsMultiSelect } from "./MultiSelect";
import { error as errorMultiSelect } from "./MultiSelect";
import { groups as groupsMultiSelect } from "./MultiSelect";
import { limit as limitMultiSelect } from "./MultiSelect";
import { readOnly as readOnlyMultiSelect } from "./MultiSelect";
import { scrollArea as scrollAreaMultiSelect } from "./MultiSelect";
import { search as searchMultiSelect } from "./MultiSelect";
import { sort as sortMultiSelect } from "./MultiSelect";
import { clearable as clearableMultiSelect } from "./MultiSelect";
import { clearSectionMode as clearSectionModeMultiSelect } from "./MultiSelect";
import { sections as sectionsMultiSelect } from "./MultiSelect";
import { dropdownOpened as dropdownOpenedMultiSelect } from "./MultiSelect";
import { dropdownPosition as dropdownPositionMultiSelect } from "./MultiSelect";
import { dropdownAnimation as dropdownAnimationMultiSelect } from "./MultiSelect";
import { dropdownPadding as dropdownPaddingMultiSelect } from "./MultiSelect";
import { dropdownShadow as dropdownShadowMultiSelect } from "./MultiSelect";
import { withinPopover as withinPopoverMultiSelect } from "./MultiSelect";
import { dropdownOffset as dropdownOffsetMultiSelect } from "./MultiSelect";
import { renderOption as renderOptionMultiSelect } from "./MultiSelect";
import { renderPill as renderPillMultiSelect } from "./MultiSelect";
import { dropdownWidth as dropdownWidthMultiSelect } from "./MultiSelect";
import { fuzzySearch as fuzzySearchMultiSelect } from "./MultiSelect";
import { loading as loadingMultiSelect } from "./MultiSelect";
import { usage as usagePill } from "./Pill";
import { withinInput as withinInputPill } from "./Pill";
import { usage as usagePillsInput } from "./PillsInput";
import { configurator as configuratorPillsInput } from "./PillsInput";
import { loading as loadingPillsInput } from "./PillsInput";
import { usage as usageSelect } from "./Select";
import { searchable as searchableSelect } from "./Select";
import { nothingFound as nothingFoundSelect } from "./Select";
import { checkIcon as checkIconSelect } from "./Select";
import { configurator as configuratorSelect } from "./Select";
import { disabled as disabledSelect } from "./Select";
import { disabledOptions as disabledOptionsSelect } from "./Select";
import { error as errorSelect } from "./Select";
import { groups as groupsSelect } from "./Select";
import { limit as limitSelect } from "./Select";
import { readOnly as readOnlySelect } from "./Select";
import { scrollArea as scrollAreaSelect } from "./Select";
import { search as searchSelect } from "./Select";
import { sort as sortSelect } from "./Select";
import { allowDeselect as allowDeselectSelect } from "./Select";
import { clearable as clearableSelect } from "./Select";
import { clearSectionMode as clearSectionModeSelect } from "./Select";
import { sections as sectionsSelect } from "./Select";
import { dropdownOpened as dropdownOpenedSelect } from "./Select";
import { dropdownPosition as dropdownPositionSelect } from "./Select";
import { dropdownAnimation as dropdownAnimationSelect } from "./Select";
import { dropdownPadding as dropdownPaddingSelect } from "./Select";
import { dropdownShadow as dropdownShadowSelect } from "./Select";
import { withinPopover as withinPopoverSelect } from "./Select";
import { dropdownOffset as dropdownOffsetSelect } from "./Select";
import { renderOption as renderOptionSelect } from "./Select";
import { dropdownWidth as dropdownWidthSelect } from "./Select";
import { autoSelectOnBlur as autoSelectOnBlurSelect } from "./Select";
import { fuzzySearch as fuzzySearchSelect } from "./Select";
import { loading as loadingSelect } from "./Select";
import { openOnFocus as openOnFocusSelect } from "./Select";
import { usage as usageTagsInput } from "./TagsInput";
import { maxTags as maxTagsTagsInput } from "./TagsInput";
import { allowDuplicates as allowDuplicatesTagsInput } from "./TagsInput";
import { splitChars as splitCharsTagsInput } from "./TagsInput";
import { data as dataTagsInput } from "./TagsInput";
import { configurator as configuratorTagsInput } from "./TagsInput";
import { disabled as disabledTagsInput } from "./TagsInput";
import { readOnly as readOnlyTagsInput } from "./TagsInput";
import { disabledOptions as disabledOptionsTagsInput } from "./TagsInput";
import { error as errorTagsInput } from "./TagsInput";
import { groups as groupsTagsInput } from "./TagsInput";
import { limit as limitTagsInput } from "./TagsInput";
import { search as searchTagsInput } from "./TagsInput";
import { scrollArea as scrollAreaTagsInput } from "./TagsInput";
import { sort as sortTagsInput } from "./TagsInput";
import { clearable as clearableTagsInput } from "./TagsInput";
import { clearSectionMode as clearSectionModeTagsInput } from "./TagsInput";
import { sections as sectionsTagsInput } from "./TagsInput";
import { dropdownOpened as dropdownOpenedTagsInput } from "./TagsInput";
import { dropdownPosition as dropdownPositionTagsInput } from "./TagsInput";
import { dropdownAnimation as dropdownAnimationTagsInput } from "./TagsInput";
import { dropdownPadding as dropdownPaddingTagsInput } from "./TagsInput";
import { dropdownShadow as dropdownShadowTagsInput } from "./TagsInput";
import { withinPopover as withinPopoverTagsInput } from "./TagsInput";
import { renderOption as renderOptionTagsInput } from "./TagsInput";
import { dropdownWidth as dropdownWidthTagsInput } from "./TagsInput";
import { acceptValueOnBlur as acceptValueOnBlurTagsInput } from "./TagsInput";
import { selectFirst as selectFirstTagsInput } from "./TagsInput";
import { isDuplicate as isDuplicateTagsInput } from "./TagsInput";
import { fuzzySearch as fuzzySearchTagsInput } from "./TagsInput";
import { loading as loadingTagsInput } from "./TagsInput";
import { renderPill as renderPillTagsInput } from "./TagsInput";

interface DataResult {
  category: string;
  pages: PageData[];
}

interface PageData {
  pageName: string;
  demo: DemoData[];
}

interface DemoData {
  demoName: string;
  demoComponent: MantineDemo;
}

export const data: DataResult = {
  category: "Combobox",
  pages: [
    {
      pageName: "Autocomplete",
      demo: [
        {
          demoName: "Autocomplete.demo.usage",
          demoComponent: usageAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.readOnly",
          demoComponent: readOnlyAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.disabled",
          demoComponent: disabledAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.configurator",
          demoComponent: configuratorAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.error",
          demoComponent: errorAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.sort",
          demoComponent: sortAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.search",
          demoComponent: searchAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.limit",
          demoComponent: limitAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.scrollArea",
          demoComponent: scrollAreaAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.groups",
          demoComponent: groupsAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.disabledOptions",
          demoComponent: disabledOptionsAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.sections",
          demoComponent: sectionsAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.dropdownOpened",
          demoComponent: dropdownOpenedAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.dropdownPosition",
          demoComponent: dropdownPositionAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.dropdownAnimation",
          demoComponent: dropdownAnimationAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.dropdownPadding",
          demoComponent: dropdownPaddingAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.dropdownShadow",
          demoComponent: dropdownShadowAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.withinPopover",
          demoComponent: withinPopoverAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.renderOption",
          demoComponent: renderOptionAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.clearable",
          demoComponent: clearableAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.clearSectionMode",
          demoComponent: clearSectionModeAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.selectFirstOptionOnChange",
          demoComponent: selectFirstOptionOnChangeAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.autoSelectOnBlur",
          demoComponent: autoSelectOnBlurAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.fuzzySearch",
          demoComponent: fuzzySearchAutocomplete,
        },
        {
          demoName: "Autocomplete.demo.loading",
          demoComponent: loadingAutocomplete,
        },
      ],
    },
    {
      pageName: "Combobox",
      demo: [
        {
          demoName: "Combobox.demo.autocomplete",
          demoComponent: autocompleteCombobox,
        },
        {
          demoName: "Combobox.demo.hiddenDropdown",
          demoComponent: hiddenDropdownCombobox,
        },
        {
          demoName: "Combobox.demo.select",
          demoComponent: selectCombobox,
        },
        {
          demoName: "Combobox.demo.searchableSelect",
          demoComponent: searchableSelectCombobox,
        },
        {
          demoName: "Combobox.demo.button",
          demoComponent: buttonCombobox,
        },
        {
          demoName: "Combobox.demo.buttonSearch",
          demoComponent: buttonSearchCombobox,
        },
        {
          demoName: "Combobox.demo.selectFirstOption",
          demoComponent: selectFirstOptionCombobox,
        },
        {
          demoName: "Combobox.demo.controlledDropdown",
          demoComponent: controlledDropdownCombobox,
        },
        {
          demoName: "Combobox.demo.activeOption",
          demoComponent: activeOptionCombobox,
        },
        {
          demoName: "Combobox.demo.nativeScroll",
          demoComponent: nativeScrollCombobox,
        },
        {
          demoName: "Combobox.demo.scrollArea",
          demoComponent: scrollAreaCombobox,
        },
        {
          demoName: "Combobox.demo.multiselect",
          demoComponent: multiselectCombobox,
        },
        {
          demoName: "Combobox.demo.searchableMultiselect",
          demoComponent: searchableMultiselectCombobox,
        },
        {
          demoName: "Combobox.demo.noDropdown",
          demoComponent: noDropdownCombobox,
        },
        {
          demoName: "Combobox.demo.groups",
          demoComponent: groupsCombobox,
        },
        {
          demoName: "Combobox.demo.dropdownPosition",
          demoComponent: dropdownPositionCombobox,
        },
        {
          demoName: "Combobox.demo.virtualized",
          demoComponent: virtualizedCombobox,
        },
        {
          demoName: "Combobox.demo.virtualizedTanstack",
          demoComponent: virtualizedTanstackCombobox,
        },
      ],
    },
    {
      pageName: "MultiSelect",
      demo: [
        {
          demoName: "MultiSelect.demo.usage",
          demoComponent: usageMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.searchable",
          demoComponent: searchableMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.maxValues",
          demoComponent: maxValuesMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.hidePickedOptions",
          demoComponent: hidePickedOptionsMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.nothingFound",
          demoComponent: nothingFoundMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.checkIcon",
          demoComponent: checkIconMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.configurator",
          demoComponent: configuratorMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.disabled",
          demoComponent: disabledMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.disabledOptions",
          demoComponent: disabledOptionsMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.error",
          demoComponent: errorMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.groups",
          demoComponent: groupsMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.limit",
          demoComponent: limitMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.readOnly",
          demoComponent: readOnlyMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.scrollArea",
          demoComponent: scrollAreaMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.search",
          demoComponent: searchMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.sort",
          demoComponent: sortMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.clearable",
          demoComponent: clearableMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.clearSectionMode",
          demoComponent: clearSectionModeMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.sections",
          demoComponent: sectionsMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.dropdownOpened",
          demoComponent: dropdownOpenedMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.dropdownPosition",
          demoComponent: dropdownPositionMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.dropdownAnimation",
          demoComponent: dropdownAnimationMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.dropdownPadding",
          demoComponent: dropdownPaddingMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.dropdownShadow",
          demoComponent: dropdownShadowMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.withinPopover",
          demoComponent: withinPopoverMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.dropdownOffset",
          demoComponent: dropdownOffsetMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.renderOption",
          demoComponent: renderOptionMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.renderPill",
          demoComponent: renderPillMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.dropdownWidth",
          demoComponent: dropdownWidthMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.fuzzySearch",
          demoComponent: fuzzySearchMultiSelect,
        },
        {
          demoName: "MultiSelect.demo.loading",
          demoComponent: loadingMultiSelect,
        },
      ],
    },
    {
      pageName: "Pill",
      demo: [
        {
          demoName: "Pill.demo.usage",
          demoComponent: usagePill,
        },
        {
          demoName: "Pill.demo.withinInput",
          demoComponent: withinInputPill,
        },
      ],
    },
    {
      pageName: "PillsInput",
      demo: [
        {
          demoName: "PillsInput.demo.usage",
          demoComponent: usagePillsInput,
        },
        {
          demoName: "PillsInput.demo.configurator",
          demoComponent: configuratorPillsInput,
        },
        {
          demoName: "PillsInput.demo.loading",
          demoComponent: loadingPillsInput,
        },
      ],
    },
    {
      pageName: "Select",
      demo: [
        {
          demoName: "Select.demo.usage",
          demoComponent: usageSelect,
        },
        {
          demoName: "Select.demo.searchable",
          demoComponent: searchableSelect,
        },
        {
          demoName: "Select.demo.nothingFound",
          demoComponent: nothingFoundSelect,
        },
        {
          demoName: "Select.demo.checkIcon",
          demoComponent: checkIconSelect,
        },
        {
          demoName: "Select.demo.configurator",
          demoComponent: configuratorSelect,
        },
        {
          demoName: "Select.demo.disabled",
          demoComponent: disabledSelect,
        },
        {
          demoName: "Select.demo.disabledOptions",
          demoComponent: disabledOptionsSelect,
        },
        {
          demoName: "Select.demo.error",
          demoComponent: errorSelect,
        },
        {
          demoName: "Select.demo.groups",
          demoComponent: groupsSelect,
        },
        {
          demoName: "Select.demo.limit",
          demoComponent: limitSelect,
        },
        {
          demoName: "Select.demo.readOnly",
          demoComponent: readOnlySelect,
        },
        {
          demoName: "Select.demo.scrollArea",
          demoComponent: scrollAreaSelect,
        },
        {
          demoName: "Select.demo.search",
          demoComponent: searchSelect,
        },
        {
          demoName: "Select.demo.sort",
          demoComponent: sortSelect,
        },
        {
          demoName: "Select.demo.allowDeselect",
          demoComponent: allowDeselectSelect,
        },
        {
          demoName: "Select.demo.clearable",
          demoComponent: clearableSelect,
        },
        {
          demoName: "Select.demo.clearSectionMode",
          demoComponent: clearSectionModeSelect,
        },
        {
          demoName: "Select.demo.sections",
          demoComponent: sectionsSelect,
        },
        {
          demoName: "Select.demo.dropdownOpened",
          demoComponent: dropdownOpenedSelect,
        },
        {
          demoName: "Select.demo.dropdownPosition",
          demoComponent: dropdownPositionSelect,
        },
        {
          demoName: "Select.demo.dropdownAnimation",
          demoComponent: dropdownAnimationSelect,
        },
        {
          demoName: "Select.demo.dropdownPadding",
          demoComponent: dropdownPaddingSelect,
        },
        {
          demoName: "Select.demo.dropdownShadow",
          demoComponent: dropdownShadowSelect,
        },
        {
          demoName: "Select.demo.withinPopover",
          demoComponent: withinPopoverSelect,
        },
        {
          demoName: "Select.demo.dropdownOffset",
          demoComponent: dropdownOffsetSelect,
        },
        {
          demoName: "Select.demo.renderOption",
          demoComponent: renderOptionSelect,
        },
        {
          demoName: "Select.demo.dropdownWidth",
          demoComponent: dropdownWidthSelect,
        },
        {
          demoName: "Select.demo.autoSelectOnBlur",
          demoComponent: autoSelectOnBlurSelect,
        },
        {
          demoName: "Select.demo.fuzzySearch",
          demoComponent: fuzzySearchSelect,
        },
        {
          demoName: "Select.demo.loading",
          demoComponent: loadingSelect,
        },
        {
          demoName: "Select.demo.openOnFocus",
          demoComponent: openOnFocusSelect,
        },
      ],
    },
    {
      pageName: "TagsInput",
      demo: [
        {
          demoName: "TagsInput.demo.usage",
          demoComponent: usageTagsInput,
        },
        {
          demoName: "TagsInput.demo.maxTags",
          demoComponent: maxTagsTagsInput,
        },
        {
          demoName: "TagsInput.demo.allowDuplicates",
          demoComponent: allowDuplicatesTagsInput,
        },
        {
          demoName: "TagsInput.demo.splitChars",
          demoComponent: splitCharsTagsInput,
        },
        {
          demoName: "TagsInput.demo.data",
          demoComponent: dataTagsInput,
        },
        {
          demoName: "TagsInput.demo.configurator",
          demoComponent: configuratorTagsInput,
        },
        {
          demoName: "TagsInput.demo.disabled",
          demoComponent: disabledTagsInput,
        },
        {
          demoName: "TagsInput.demo.readOnly",
          demoComponent: readOnlyTagsInput,
        },
        {
          demoName: "TagsInput.demo.disabledOptions",
          demoComponent: disabledOptionsTagsInput,
        },
        {
          demoName: "TagsInput.demo.error",
          demoComponent: errorTagsInput,
        },
        {
          demoName: "TagsInput.demo.groups",
          demoComponent: groupsTagsInput,
        },
        {
          demoName: "TagsInput.demo.limit",
          demoComponent: limitTagsInput,
        },
        {
          demoName: "TagsInput.demo.search",
          demoComponent: searchTagsInput,
        },
        {
          demoName: "TagsInput.demo.scrollArea",
          demoComponent: scrollAreaTagsInput,
        },
        {
          demoName: "TagsInput.demo.sort",
          demoComponent: sortTagsInput,
        },
        {
          demoName: "TagsInput.demo.clearable",
          demoComponent: clearableTagsInput,
        },
        {
          demoName: "TagsInput.demo.clearSectionMode",
          demoComponent: clearSectionModeTagsInput,
        },
        {
          demoName: "TagsInput.demo.sections",
          demoComponent: sectionsTagsInput,
        },
        {
          demoName: "TagsInput.demo.dropdownOpened",
          demoComponent: dropdownOpenedTagsInput,
        },
        {
          demoName: "TagsInput.demo.dropdownPosition",
          demoComponent: dropdownPositionTagsInput,
        },
        {
          demoName: "TagsInput.demo.dropdownAnimation",
          demoComponent: dropdownAnimationTagsInput,
        },
        {
          demoName: "TagsInput.demo.dropdownPadding",
          demoComponent: dropdownPaddingTagsInput,
        },
        {
          demoName: "TagsInput.demo.dropdownShadow",
          demoComponent: dropdownShadowTagsInput,
        },
        {
          demoName: "TagsInput.demo.withinPopover",
          demoComponent: withinPopoverTagsInput,
        },
        {
          demoName: "TagsInput.demo.renderOption",
          demoComponent: renderOptionTagsInput,
        },
        {
          demoName: "TagsInput.demo.dropdownWidth",
          demoComponent: dropdownWidthTagsInput,
        },
        {
          demoName: "TagsInput.demo.acceptValueOnBlur",
          demoComponent: acceptValueOnBlurTagsInput,
        },
        {
          demoName: "TagsInput.demo.selectFirst",
          demoComponent: selectFirstTagsInput,
        },
        {
          demoName: "TagsInput.demo.isDuplicate",
          demoComponent: isDuplicateTagsInput,
        },
        {
          demoName: "TagsInput.demo.fuzzySearch",
          demoComponent: fuzzySearchTagsInput,
        },
        {
          demoName: "TagsInput.demo.loading",
          demoComponent: loadingTagsInput,
        },
        {
          demoName: "TagsInput.demo.renderPill",
          demoComponent: renderPillTagsInput,
        },
      ],
    },
  ],
};
