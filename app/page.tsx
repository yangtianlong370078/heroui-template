"use client";

import dynamic from "next/dynamic";
import {lazy, Suspense, useState} from "react";

const ActionBarDemo = lazy(() => import("@/components/action-bar-demo"));
const ActionBarWithDataGridDemo = lazy(() => import("@/components/action-bar-with-data-grid-demo"));
const AreaChartDemo = lazy(() => import("@/components/area-chart-demo"));
const AreaChartCustomTooltipDemo = lazy(() => import("@/components/area-chart-custom-tooltip-demo"));
const AreaChartKpiDemo = lazy(() => import("@/components/area-chart-kpi-demo"));
const AreaChartMultiAreaDemo = lazy(() => import("@/components/area-chart-multi-area-demo"));
const AreaChartSparklineDemo = lazy(() => import("@/components/area-chart-sparkline-demo"));
const AreaChartStackedDemo = lazy(() => import("@/components/area-chart-stacked-demo"));
const BarChartDemo = lazy(() => import("@/components/bar-chart-demo"));
const BarChartComparisonDemo = lazy(() => import("@/components/bar-chart-comparison-demo"));
const BarChartCustomTooltipDemo = lazy(() => import("@/components/bar-chart-custom-tooltip-demo"));
const BarChartGroupedDemo = lazy(() => import("@/components/bar-chart-grouped-demo"));
const BarChartHorizontalDemo = lazy(() => import("@/components/bar-chart-horizontal-demo"));
const BarChartHorizontalStackedDemo = lazy(() => import("@/components/bar-chart-horizontal-stacked-demo"));
const BarChartKpiDemo = lazy(() => import("@/components/bar-chart-kpi-demo"));
const BarChartStackedDemo = lazy(() => import("@/components/bar-chart-stacked-demo"));
const CarouselApiAccessDemo = lazy(() => import("@/components/carousel-api-access-demo"));
const CarouselAutoplayDemo = lazy(() => import("@/components/carousel-autoplay-demo"));
const CarouselDemo = lazy(() => import("@/components/carousel-demo"));
const CarouselLoopDemo = lazy(() => import("@/components/carousel-loop-demo"));
const CarouselModalTypeDemo = lazy(() => import("@/components/carousel-modal-type-demo"));
const CarouselMultipleSlidesDemo = lazy(() => import("@/components/carousel-multiple-slides-demo"));
const CellColorPickerDemo = lazy(() => import("@/components/cell-color-picker-demo"));
const CellColorPickerControlledDemo = lazy(() => import("@/components/cell-color-picker-controlled-demo"));
const CellColorPickerDisabledDemo = lazy(() => import("@/components/cell-color-picker-disabled-demo"));
const CellColorPickerSettingsGroupDemo = lazy(() => import("@/components/cell-color-picker-settings-group-demo"));
const CellColorPickerVariantsDemo = lazy(() => import("@/components/cell-color-picker-variants-demo"));
const CellColorPickerWithPresetsDemo = lazy(() => import("@/components/cell-color-picker-with-presets-demo"));
const CellSelectDemo = lazy(() => import("@/components/cell-select-demo"));
const CellSelectControlledDemo = lazy(() => import("@/components/cell-select-controlled-demo"));
const CellSelectCustomValueDemo = lazy(() => import("@/components/cell-select-custom-value-demo"));
const CellSelectDisabledDemo = lazy(() => import("@/components/cell-select-disabled-demo"));
const CellSelectFontFamilyDemo = lazy(() => import("@/components/cell-select-font-family-demo"));
const CellSelectSettingsGroupDemo = lazy(() => import("@/components/cell-select-settings-group-demo"));
const CellSelectVariantsDemo = lazy(() => import("@/components/cell-select-variants-demo"));
const CellSliderDemo = lazy(() => import("@/components/cell-slider-demo"));
const CellSliderControlledDemo = lazy(() => import("@/components/cell-slider-controlled-demo"));
const CellSliderDisabledDemo = lazy(() => import("@/components/cell-slider-disabled-demo"));
const CellSliderIntegerStepDemo = lazy(() => import("@/components/cell-slider-integer-step-demo"));
const CellSliderSecondaryGroupDemo = lazy(() => import("@/components/cell-slider-secondary-group-demo"));
const CellSliderSettingsGroupDemo = lazy(() => import("@/components/cell-slider-settings-group-demo"));
const CellSliderVariantsDemo = lazy(() => import("@/components/cell-slider-variants-demo"));
const CellSwitchDemo = lazy(() => import("@/components/cell-switch-demo"));
const CellSwitchControlledDemo = lazy(() => import("@/components/cell-switch-controlled-demo"));
const CellSwitchDisabledDemo = lazy(() => import("@/components/cell-switch-disabled-demo"));
const CellSwitchFeatureAnnouncementDemo = lazy(() => import("@/components/cell-switch-feature-announcement-demo"));
const CellSwitchSecondaryGroupDemo = lazy(() => import("@/components/cell-switch-secondary-group-demo"));
const CellSwitchSettingsGroupDemo = lazy(() => import("@/components/cell-switch-settings-group-demo"));
const CellSwitchVariantsDemo = lazy(() => import("@/components/cell-switch-variants-demo"));
const CheckboxButtonGroupDemo = lazy(() => import("@/components/checkbox-button-group-demo"));
const CheckboxButtonGroupCustomIndicatorDemo = lazy(() => import("@/components/checkbox-button-group-custom-indicator-demo"));
const CheckboxButtonGroupGridLayoutDemo = lazy(() => import("@/components/checkbox-button-group-grid-layout-demo"));
const CheckboxButtonGroupNoIndicatorDemo = lazy(() => import("@/components/checkbox-button-group-no-indicator-demo"));
const CheckboxButtonGroupWithIconsDemo = lazy(() => import("@/components/checkbox-button-group-with-icons-demo"));
const CheckboxButtonGroupWithRippleDemo = lazy(() => import("@/components/checkbox-button-group-with-ripple-demo"));
const CommandDemo = lazy(() => import("@/components/command-demo"));
const CommandCleanDemo = lazy(() => import("@/components/command-clean-demo"));
const CommandDevToolbarDemo = lazy(() => import("@/components/command-dev-toolbar-demo"));
const CommandLauncherDemo = lazy(() => import("@/components/command-launcher-demo"));
const CommandMinimalDemo = lazy(() => import("@/components/command-minimal-demo"));
const CommandSplitViewDemo = lazy(() => import("@/components/command-split-view-demo"));
const CommandMultipleSearchTermsDemo = lazy(() => import("@/components/command-multiple-search-terms-demo"));
const CommandSizesDemo = lazy(() => import("@/components/command-sizes-demo"));
const CommandBackdropVariantsDemo = lazy(() => import("@/components/command-backdrop-variants-demo"));
const ComposedChartDemo = lazy(() => import("@/components/composed-chart-demo"));
const ComposedChartStackedBarWithLineDemo = lazy(() => import("@/components/composed-chart-stacked-bar-with-line-demo"));
const ComposedChartAreaWithLineDemo = lazy(() => import("@/components/composed-chart-area-with-line-demo"));
const ComposedChartBarWithAreaDemo = lazy(() => import("@/components/composed-chart-bar-with-area-demo"));
const ComposedChartMultiTypeDemo = lazy(() => import("@/components/composed-chart-multi-type-demo"));
const ContextMenuDemo = lazy(() => import("@/components/context-menu-demo"));
const ContextMenuControlledDemo = lazy(() => import("@/components/context-menu-controlled-demo"));
const ContextMenuDisabledDemo = lazy(() => import("@/components/context-menu-disabled-demo"));
const ContextMenuLongPressDemo = lazy(() => import("@/components/context-menu-long-press-demo"));
const ContextMenuWithSectionsDemo = lazy(() => import("@/components/context-menu-with-sections-demo"));
const ContextMenuWithSelectionDemo = lazy(() => import("@/components/context-menu-with-selection-demo"));
const ContextMenuWithSubmenusDemo = lazy(() => import("@/components/context-menu-with-submenus-demo"));
const DataGridAsyncLoadingDemo = lazy(() => import("@/components/data-grid-async-loading-demo"));
const DataGridBulkActionsDemo = lazy(() => import("@/components/data-grid-bulk-actions-demo"));
const DataGridDemo = lazy(() => import("@/components/data-grid-demo"));
const DataGridDragAndDropDemo = lazy(() => import("@/components/data-grid-drag-and-drop-demo"));
const DataGridEditableCellsDemo = lazy(() => import("@/components/data-grid-editable-cells-demo"));
const DataGridEmptyStateDemo = lazy(() => import("@/components/data-grid-empty-state-demo"));
const DataGridExpandableRowsDemo = lazy(() => import("@/components/data-grid-expandable-rows-demo"));
const DataGridPinnedColumnsDemo = lazy(() => import("@/components/data-grid-pinned-columns-demo"));
const DataGridServersDemo = lazy(() => import("@/components/data-grid-servers-demo"));
const DataGridTeamMembersDemo = lazy(() => import("@/components/data-grid-team-members-demo"));
const DataGridUsersDemo = lazy(() => import("@/components/data-grid-users-demo"));
const DataGridVirtualizedDemo = lazy(() => import("@/components/data-grid-virtualized-demo"));
const DropZoneDemo = lazy(() => import("@/components/drop-zone-demo"));
const DropZoneWithFileListDemo = lazy(() => import("@/components/drop-zone-with-file-list-demo"));
const DropZoneCompactFileListDemo = lazy(() => import("@/components/drop-zone-compact-file-list-demo"));
const DropZoneDisabledDemo = lazy(() => import("@/components/drop-zone-disabled-demo"));
const DropZoneImageOnlyDemo = lazy(() => import("@/components/drop-zone-image-only-demo"));
const DropZoneMaxSizeLimitDemo = lazy(() => import("@/components/drop-zone-max-size-limit-demo"));
const DropZoneMultipleFilesDemo = lazy(() => import("@/components/drop-zone-multiple-files-demo"));
const DropZoneCustomIconDemo = lazy(() => import("@/components/drop-zone-custom-icon-demo"));
const DropZoneCustomTriggersDemo = lazy(() => import("@/components/drop-zone-custom-triggers-demo"));
const EmojiPickerDemo = dynamic(() => import("@/components/emoji-picker-demo"), {ssr: false});
const EmojiPickerCustomCategoriesDemo = dynamic(() => import("@/components/emoji-picker-custom-categories-demo"), {ssr: false});
const EmojiPickerInlineDemo = dynamic(() => import("@/components/emoji-picker-inline-demo"), {ssr: false});
const EmojiPickerSizesDemo = dynamic(() => import("@/components/emoji-picker-sizes-demo"), {ssr: false});
const EmojiReactionButtonDemo = lazy(() => import("@/components/emoji-reaction-button-demo"));
const EmojiReactionButtonDisabledDemo = lazy(() => import("@/components/emoji-reaction-button-disabled-demo"));
const EmojiReactionButtonSizesDemo = lazy(() => import("@/components/emoji-reaction-button-sizes-demo"));
const EmptyStateDemo = lazy(() => import("@/components/empty-state-demo"));
const EmptyStateFullHeightDemo = lazy(() => import("@/components/empty-state-full-height-demo"));
const EmptyStateMinimalDemo = lazy(() => import("@/components/empty-state-minimal-demo"));
const EmptyStateOutlineDemo = lazy(() => import("@/components/empty-state-outline-demo"));
const EmptyStateSizesDemo = lazy(() => import("@/components/empty-state-sizes-demo"));
const EmptyStateWithAvatarDemo = lazy(() => import("@/components/empty-state-with-avatar-demo"));
const EmptyStateWithAvatarGroupDemo = lazy(() => import("@/components/empty-state-with-avatar-group-demo"));
const EmptyStateWithBackgroundDemo = lazy(() => import("@/components/empty-state-with-background-demo"));
const FileTreeCustomIndicatorDemo = lazy(() => import("@/components/file-tree-custom-indicator-demo"));
const FileTreeDemo = lazy(() => import("@/components/file-tree-demo"));
const FileTreeDragAndDropDemo = lazy(() => import("@/components/file-tree-drag-and-drop-demo"));
const FileTreeDynamicCollectionDemo = lazy(() => import("@/components/file-tree-dynamic-collection-demo"));
const FileTreeGuideLinesDemo = lazy(() => import("@/components/file-tree-guide-lines-demo"));
const FileTreeMultipleSelectionDemo = lazy(() => import("@/components/file-tree-multiple-selection-demo"));
const FileTreePRFileReviewDemo = lazy(() => import("@/components/file-tree-pr-file-review-demo"));
const FileTreeReducedMotionDemo = lazy(() => import("@/components/file-tree-reduced-motion-demo"));
const FileTreeSizesDemo = lazy(() => import("@/components/file-tree-sizes-demo"));
const FileTreeWithIconsDemo = lazy(() => import("@/components/file-tree-with-icons-demo"));
const FloatingTocDemo = lazy(() => import("@/components/floating-toc-demo"));
const FloatingTocControlledDemo = lazy(() => import("@/components/floating-toc-controlled-demo"));
const FloatingTocCustomDelaysDemo = lazy(() => import("@/components/floating-toc-custom-delays-demo"));
const FloatingTocHierarchicalDemo = lazy(() => import("@/components/floating-toc-hierarchical-demo"));
const FloatingTocInPageContextDemo = lazy(() => import("@/components/floating-toc-in-page-context-demo"));
const FloatingTocLeftAlignedBarsDemo = lazy(() => import("@/components/floating-toc-left-aligned-bars-demo"));
const FloatingTocLeftPlacementDemo = lazy(() => import("@/components/floating-toc-left-placement-demo"));
const FloatingTocPressModeDemo = lazy(() => import("@/components/floating-toc-press-mode-demo"));
const FloatingTocPressModeInPageDemo = lazy(() => import("@/components/floating-toc-press-mode-in-page-demo"));
const FloatingTocVirtualizedDemo = lazy(() => import("@/components/floating-toc-virtualized-demo"));
const HoverCardDemo = lazy(() => import("@/components/hover-card-demo"));
const HoverCardControlledDemo = lazy(() => import("@/components/hover-card-controlled-demo"));
const HoverCardCustomDelaysDemo = lazy(() => import("@/components/hover-card-custom-delays-demo"));
const HoverCardPlacementsDemo = lazy(() => import("@/components/hover-card-placements-demo"));
const HoverCardWithArrowDemo = lazy(() => import("@/components/hover-card-with-arrow-demo"));
const HoverCardWithImageDemo = lazy(() => import("@/components/hover-card-with-image-demo"));
const InlineSelectDemo = lazy(() => import("@/components/inline-select-demo"));
const InlineSelectTeamSwitcherDemo = lazy(() => import("@/components/inline-select-team-switcher-demo"));
const InlineSelectCustomIndicatorDemo = lazy(() => import("@/components/inline-select-custom-indicator-demo"));
const InlineSelectMultiSelectDemo = lazy(() => import("@/components/inline-select-multi-select-demo"));
const InlineSelectPlacementsDemo = lazy(() => import("@/components/inline-select-placements-demo"));
const ItemCardDemo = lazy(() => import("@/components/item-card-demo"));
const ItemCardDeviceListDemo = lazy(() => import("@/components/item-card-device-list-demo"));
const ItemCardEmailSettingDemo = lazy(() => import("@/components/item-card-email-setting-demo"));
const ItemCardPressableDemo = lazy(() => import("@/components/item-card-pressable-demo"));
const ItemCardTitleOnlyDemo = lazy(() => import("@/components/item-card-title-only-demo"));
const ItemCardVariantsDemo = lazy(() => import("@/components/item-card-variants-demo"));
const ItemCardVerticalStackDemo = lazy(() => import("@/components/item-card-vertical-stack-demo"));
const ItemCardWalletCardDemo = lazy(() => import("@/components/item-card-wallet-card-demo"));
const ItemCardWithMultiSelectDemo = lazy(() => import("@/components/item-card-with-multi-select-demo"));
const ItemCardWithSelectDemo = lazy(() => import("@/components/item-card-with-select-demo"));
const ItemCardWithSwitchDemo = lazy(() => import("@/components/item-card-with-switch-demo"));
const ItemCardWithoutIconDemo = lazy(() => import("@/components/item-card-without-icon-demo"));
const ItemCardGroupDemo = lazy(() => import("@/components/item-card-group-demo"));
const ItemCardGroupDeveloperSettingsDemo = lazy(() => import("@/components/item-card-group-developer-settings-demo"));
const ItemCardGroupGridDemo = lazy(() => import("@/components/item-card-group-grid-demo"));
const ItemCardGroupGridThreeColumnsDemo = lazy(() => import("@/components/item-card-group-grid-three-columns-demo"));
const ItemCardGroupLinkedAccountsDemo = lazy(() => import("@/components/item-card-group-linked-accounts-demo"));
const ItemCardGroupListDemo = lazy(() => import("@/components/item-card-group-list-demo"));
const ItemCardGroupMultipleSectionsDemo = lazy(() => import("@/components/item-card-group-multiple-sections-demo"));
const ItemCardGroupNotificationPreferencesDemo = lazy(() => import("@/components/item-card-group-notification-preferences-demo"));
const ItemCardGroupPermissionLevelsDemo = lazy(() => import("@/components/item-card-group-permission-levels-demo"));
const ItemCardGroupPressableDemo = lazy(() => import("@/components/item-card-group-pressable-demo"));
const ItemCardGroupVariantsDemo = lazy(() => import("@/components/item-card-group-variants-demo"));
const ItemCardGroupWalletListDemo = lazy(() => import("@/components/item-card-group-wallet-list-demo"));
const ItemCardGroupWithHeaderDemo = lazy(() => import("@/components/item-card-group-with-header-demo"));
const JeDatePickerDemo = lazy(() => import("@/components/je-date-picker-demo"));
const KanbanDemo = lazy(() => import("@/components/kanban-demo"));
const KanbanNotionBoardDemo = lazy(() => import("@/components/kanban-notion-board-demo"));
const KanbanProjectBoardDemo = lazy(() => import("@/components/kanban-project-board-demo"));
const KanbanSizesDemo = lazy(() => import("@/components/kanban-sizes-demo"));
const KpiDemo = lazy(() => import("@/components/kpi-demo"));
const KpiGroupDemo = lazy(() => import("@/components/kpi-group-demo"));
const KpiGroupVerticalDemo = lazy(() => import("@/components/kpi-group-vertical-demo"));
const KpiGroupWithFromSuffixDemo = lazy(() => import("@/components/kpi-group-with-from-suffix-demo"));
const KpiWithActionsDemo = lazy(() => import("@/components/kpi-with-actions-demo"));
const KpiWithChartBottomDemo = lazy(() => import("@/components/kpi-with-chart-bottom-demo"));
const KpiWithChartInlineDemo = lazy(() => import("@/components/kpi-with-chart-inline-demo"));
const KpiWithFooterDemo = lazy(() => import("@/components/kpi-with-footer-demo"));
const KpiWithIconDemo = lazy(() => import("@/components/kpi-with-icon-demo"));
const KpiWithProgressDemo = lazy(() => import("@/components/kpi-with-progress-demo"));
const LineChartDemo = lazy(() => import("@/components/line-chart-demo"));
const LineChartCustomTooltipDemo = lazy(() => import("@/components/line-chart-custom-tooltip-demo"));
const LineChartDashedComparisonDemo = lazy(() => import("@/components/line-chart-dashed-comparison-demo"));
const LineChartKpiDemo = lazy(() => import("@/components/line-chart-kpi-demo"));
const LineChartMultiColorDemo = lazy(() => import("@/components/line-chart-multi-color-demo"));
const LineChartPortfolioDemo = lazy(() => import("@/components/line-chart-portfolio-demo"));
const LineChartSparklineDemo = lazy(() => import("@/components/line-chart-sparkline-demo"));
const LineChartStatsDemo = lazy(() => import("@/components/line-chart-stats-demo"));
const LineChartTrafficSourceDemo = lazy(() => import("@/components/line-chart-traffic-source-demo"));
const LineChartWithDotsDemo = lazy(() => import("@/components/line-chart-with-dots-demo"));
const ListViewDemo = lazy(() => import("@/components/list-view-demo"));
const ListViewSelectionModesDemo = lazy(() => import("@/components/list-view-selection-modes-demo"));
const ListViewSecondaryDemo = lazy(() => import("@/components/list-view-secondary-demo"));
const ListViewDisabledItemsDemo = lazy(() => import("@/components/list-view-disabled-items-demo"));
const ListViewWithActionBarDemo = lazy(() => import("@/components/list-view-with-action-bar-demo"));
const NativeSelectDemo = lazy(() => import("@/components/native-select-demo"));
const NativeSelectControlledDemo = lazy(() => import("@/components/native-select-controlled-demo"));
const NativeSelectCustomIndicatorDemo = lazy(() => import("@/components/native-select-custom-indicator-demo"));
const NativeSelectDisabledSelectDemo = lazy(() => import("@/components/native-select-disabled-select-demo"));
const NativeSelectFormExampleDemo = lazy(() => import("@/components/native-select-form-example-demo"));
const NativeSelectFullWidthDemo = lazy(() => import("@/components/native-select-full-width-demo"));
const NativeSelectInvalidStateDemo = lazy(() => import("@/components/native-select-invalid-state-demo"));
const NativeSelectVariantsDemo = lazy(() => import("@/components/native-select-variants-demo"));
const NativeSelectWithDescriptionDemo = lazy(() => import("@/components/native-select-with-description-demo"));
const NativeSelectWithDisabledOptionsDemo = lazy(() => import("@/components/native-select-with-disabled-options-demo"));
const NativeSelectWithGroupsDemo = lazy(() => import("@/components/native-select-with-groups-demo"));
const NativeSelectWithLabelDemo = lazy(() => import("@/components/native-select-with-label-demo"));
const AppLayoutDemo = lazy(() => import("@/components/app-layout-demo"));
const AppLayoutOffcanvasDemo = lazy(() => import("@/components/app-layout-offcanvas-demo"));
const AppLayoutInsetSidebarDemo = lazy(() => import("@/components/app-layout-inset-sidebar-demo"));
const AppLayoutFloatingSidebarDemo = lazy(() => import("@/components/app-layout-floating-sidebar-demo"));
const AppLayoutWithAsideDemo = lazy(() => import("@/components/app-layout-with-aside-demo"));
const AppLayoutWithBreadcrumbsDemo = lazy(() => import("@/components/app-layout-with-breadcrumbs-demo"));
const AppLayoutResizableDemo = lazy(() => import("@/components/app-layout-resizable-demo"));
const AppLayoutToolbarFooterDemo = lazy(() => import("@/components/app-layout-toolbar-footer-demo"));
const NavbarProDemo = lazy(() => import("@/components/navbar-pro-demo"));
const NavbarProDocsSiteDemo = lazy(() => import("@/components/navbar-pro-docs-site-demo"));
const NavbarProWithDropdownsDemo = lazy(() => import("@/components/navbar-pro-with-dropdowns-demo"));
const NavbarProDashboardDemo = lazy(() => import("@/components/navbar-pro-dashboard-demo"));
const NavbarProCompactDemo = lazy(() => import("@/components/navbar-pro-compact-demo"));
const NavbarProWithMenuDemo = lazy(() => import("@/components/navbar-pro-with-menu-demo"));
const NavbarProHideOnScrollDemo = lazy(() => import("@/components/navbar-pro-hide-on-scroll-demo"));
const SidebarDemo = lazy(() => import("@/components/sidebar-demo"));
const SidebarComplexDemo = lazy(() => import("@/components/sidebar-complex-demo"));
const SidebarCompactWithUserMenuDemo = lazy(() => import("@/components/sidebar-compact-with-user-menu-demo"));
const SidebarAgentHubDemo = lazy(() => import("@/components/sidebar-agent-hub-demo"));
const SidebarAgentWorkspaceDemo = lazy(() => import("@/components/sidebar-agent-workspace-demo"));
const SidebarInsetVariantDemo = lazy(() => import("@/components/sidebar-inset-variant-demo"));
const SidebarWithGroupsDemo = lazy(() => import("@/components/sidebar-with-groups-demo"));
const SidebarCollapsibleGroupsDemo = lazy(() => import("@/components/sidebar-collapsible-groups-demo"));
const SidebarCollapsibleDemo = lazy(() => import("@/components/sidebar-collapsible-demo"));
const SidebarFloatingVariantDemo = lazy(() => import("@/components/sidebar-floating-variant-demo"));
const SidebarWithAvatarDemo = lazy(() => import("@/components/sidebar-with-avatar-demo"));
const SidebarRightSideDemo = lazy(() => import("@/components/sidebar-right-side-demo"));
const SidebarIconOnlyDemo = lazy(() => import("@/components/sidebar-icon-only-demo"));
const NumberStepperDemo = lazy(() => import("@/components/number-stepper-demo"));
const NumberStepperGuestPickerDemo = lazy(() => import("@/components/number-stepper-guest-picker-demo"));
const NumberStepperControlledDemo = lazy(() => import("@/components/number-stepper-controlled-demo"));
const NumberStepperCustomIconsDemo = lazy(() => import("@/components/number-stepper-custom-icons-demo"));
const NumberStepperCustomValueDemo = lazy(() => import("@/components/number-stepper-custom-value-demo"));
const NumberStepperDisabledDemo = lazy(() => import("@/components/number-stepper-disabled-demo"));
const NumberStepperMinMaxValuesDemo = lazy(() => import("@/components/number-stepper-min-max-values-demo"));
const NumberStepperReversedLayoutDemo = lazy(() => import("@/components/number-stepper-reversed-layout-demo"));
const NumberStepperSizesDemo = lazy(() => import("@/components/number-stepper-sizes-demo"));
const NumberStepperWithCustomButtonsDemo = lazy(() => import("@/components/number-stepper-with-custom-buttons-demo"));
const NumberStepperWithFormatOptionsDemo = lazy(() => import("@/components/number-stepper-with-format-options-demo"));
const NumberStepperWithLabelDemo = lazy(() => import("@/components/number-stepper-with-label-demo"));
const NumberStepperWithStepDemo = lazy(() => import("@/components/number-stepper-with-step-demo"));
const NumberValueDemo = lazy(() => import("@/components/number-value-demo"));
const NumberValueCompactDemo = lazy(() => import("@/components/number-value-compact-demo"));
const NumberValueCurrencyDemo = lazy(() => import("@/components/number-value-currency-demo"));
const NumberValueFormatOptionsDemo = lazy(() => import("@/components/number-value-format-options-demo"));
const NumberValuePercentDemo = lazy(() => import("@/components/number-value-percent-demo"));
const NumberValueSignDisplayDemo = lazy(() => import("@/components/number-value-sign-display-demo"));
const NumberValueTabularNumsDemo = lazy(() => import("@/components/number-value-tabular-nums-demo"));
const NumberValueWithPrefixSuffixDemo = lazy(() => import("@/components/number-value-with-prefix-suffix-demo"));
const PieChartDemo = lazy(() => import("@/components/pie-chart-demo"));
const PieChartCustomTooltipDemo = lazy(() => import("@/components/pie-chart-custom-tooltip-demo"));
const PieChartDonutDemo = lazy(() => import("@/components/pie-chart-donut-demo"));
const PieChartDonutWithContentDemo = lazy(() => import("@/components/pie-chart-donut-with-content-demo"));
const PieChartDonutWithLabelDemo = lazy(() => import("@/components/pie-chart-donut-with-label-demo"));
const PieChartNestedDonutDemo = lazy(() => import("@/components/pie-chart-nested-donut-demo"));
const PieChartWithBreakdownDemo = lazy(() => import("@/components/pie-chart-with-breakdown-demo"));
const PressableFeedbackDemo = lazy(() => import("@/components/pressable-feedback-demo"));
const PressableFeedbackComparisonDemo = lazy(() => import("@/components/pressable-feedback-comparison-demo"));
const PressableFeedbackDisabledDemo = lazy(() => import("@/components/pressable-feedback-disabled-demo"));
const PressableFeedbackHoldConfirmCallbackDemo = lazy(() => import("@/components/pressable-feedback-hold-confirm-callback-demo"));
const PressableFeedbackHoldConfirmDurationsDemo = lazy(() => import("@/components/pressable-feedback-hold-confirm-durations-demo"));
const PressableFeedbackHoldConfirmSweepDemo = lazy(() => import("@/components/pressable-feedback-hold-confirm-sweep-demo"));
const PressableFeedbackPressableCardsDemo = lazy(() => import("@/components/pressable-feedback-pressable-cards-demo"));
const PressableFeedbackProgressFeedbackCallbackDemo = lazy(() => import("@/components/pressable-feedback-progress-feedback-callback-demo"));
const PressableFeedbackProgressFeedbackDurationsDemo = lazy(() => import("@/components/pressable-feedback-progress-feedback-durations-demo"));
const PressableFeedbackProgressFeedbackNoResetDemo = lazy(() => import("@/components/pressable-feedback-progress-feedback-no-reset-demo"));
const PressableFeedbackProgressFeedbackSweepDemo = lazy(() => import("@/components/pressable-feedback-progress-feedback-sweep-demo"));
const PressableFeedbackStandaloneHighlightDemo = lazy(() => import("@/components/pressable-feedback-standalone-highlight-demo"));
const PressableFeedbackStandaloneRippleDemo = lazy(() => import("@/components/pressable-feedback-standalone-ripple-demo"));
const PressableFeedbackWithHighlightDemo = lazy(() => import("@/components/pressable-feedback-with-highlight-demo"));
const PressableFeedbackWithHoldConfirmDemo = lazy(() => import("@/components/pressable-feedback-with-hold-confirm-demo"));
const PressableFeedbackWithProgressFeedbackDemo = lazy(() => import("@/components/pressable-feedback-with-progress-feedback-demo"));
const PressableFeedbackWithRippleDemo = lazy(() => import("@/components/pressable-feedback-with-ripple-demo"));
const RadarChartDemo = lazy(() => import("@/components/radar-chart-demo"));
const RadarChartComparisonDemo = lazy(() => import("@/components/radar-chart-comparison-demo"));
const RadarChartDotsOnlyDemo = lazy(() => import("@/components/radar-chart-dots-only-demo"));
const RadarChartMultiSeriesDemo = lazy(() => import("@/components/radar-chart-multi-series-demo"));
const RadarChartWithRadiusAxisDemo = lazy(() => import("@/components/radar-chart-with-radius-axis-demo"));
const RadialChartDemo = lazy(() => import("@/components/radial-chart-demo"));
const RadialChartGaugeDemo = lazy(() => import("@/components/radial-chart-gauge-demo"));
const RadialChartGaugeGridDemo = lazy(() => import("@/components/radial-chart-gauge-grid-demo"));
const RadialChartProgressRingDemo = lazy(() => import("@/components/radial-chart-progress-ring-demo"));
const RadialChartWithLegendDemo = lazy(() => import("@/components/radial-chart-with-legend-demo"));
const RadioButtonGroupDemo = lazy(() => import("@/components/radio-button-group-demo"));
const RadioButtonGroupDeliveryAndPaymentDemo = lazy(() => import("@/components/radio-button-group-delivery-and-payment-demo"));
const RadioButtonGroupSubscriptionPlansDemo = lazy(() => import("@/components/radio-button-group-subscription-plans-demo"));
const RadioButtonGroupControlledDemo = lazy(() => import("@/components/radio-button-group-controlled-demo"));
const RadioButtonGroupCustomIndicatorDemo = lazy(() => import("@/components/radio-button-group-custom-indicator-demo"));
const RadioButtonGroupDisabledGroupDemo = lazy(() => import("@/components/radio-button-group-disabled-group-demo"));
const RadioButtonGroupGridLayoutDemo = lazy(() => import("@/components/radio-button-group-grid-layout-demo"));
const RadioButtonGroupIconCardsDemo = lazy(() => import("@/components/radio-button-group-icon-cards-demo"));
const RadioButtonGroupNoIndicatorDemo = lazy(() => import("@/components/radio-button-group-no-indicator-demo"));
const RadioButtonGroupRenderPropChildrenDemo = lazy(() => import("@/components/radio-button-group-render-prop-children-demo"));
const RadioButtonGroupWithIconsDemo = lazy(() => import("@/components/radio-button-group-with-icons-demo"));
const RadioButtonGroupWithRippleDemo = lazy(() => import("@/components/radio-button-group-with-ripple-demo"));
const RatingDemo = lazy(() => import("@/components/rating-demo"));
const RatingControlledDemo = lazy(() => import("@/components/rating-controlled-demo"));
const RatingCustomColorDemo = lazy(() => import("@/components/rating-custom-color-demo"));
const RatingCustomIconHeartDemo = lazy(() => import("@/components/rating-custom-icon-heart-demo"));
const RatingCustomIconPerItemDemo = lazy(() => import("@/components/rating-custom-icon-per-item-demo"));
const RatingDisabledDemo = lazy(() => import("@/components/rating-disabled-demo"));
const RatingProductReviewDemo = lazy(() => import("@/components/rating-product-review-demo"));
const RatingReadOnlyDemo = lazy(() => import("@/components/rating-read-only-demo"));
const RatingReadOnlyFractionalDemo = lazy(() => import("@/components/rating-read-only-fractional-demo"));
const RatingRenderFunctionDemo = lazy(() => import("@/components/rating-render-function-demo"));
const RatingSizesDemo = lazy(() => import("@/components/rating-sizes-demo"));
const RatingWithLabelDemo = lazy(() => import("@/components/rating-with-label-demo"));
const ResizableDemo = lazy(() => import("@/components/resizable-demo"));
const ResizableVerticalDemo = lazy(() => import("@/components/resizable-vertical-demo"));
const ResizableTypesDemo = lazy(() => import("@/components/resizable-types-demo"));
const ResizableVariantsDemo = lazy(() => import("@/components/resizable-variants-demo"));
const ResizableNestedDemo = lazy(() => import("@/components/resizable-nested-demo"));
const ResizableWithCollapseDemo = lazy(() => import("@/components/resizable-with-collapse-demo"));
const ResizableWithIndicatorDemo = lazy(() => import("@/components/resizable-with-indicator-demo"));
const SegmentDemo = lazy(() => import("@/components/segment-demo"));
const SegmentWithoutSeparatorsDemo = lazy(() => import("@/components/segment-without-separators-demo"));
const SegmentControlledDemo = lazy(() => import("@/components/segment-controlled-demo"));
const SegmentDisabledDemo = lazy(() => import("@/components/segment-disabled-demo"));
const SegmentDisabledItemDemo = lazy(() => import("@/components/segment-disabled-item-demo"));
const SegmentSizesDemo = lazy(() => import("@/components/segment-sizes-demo"));
const SegmentThemeSwitcherDemo = lazy(() => import("@/components/segment-theme-switcher-demo"));
const SegmentTwoItemsDemo = lazy(() => import("@/components/segment-two-items-demo"));
const SegmentWithIconsDemo = lazy(() => import("@/components/segment-with-icons-demo"));
const SheetDemo = lazy(() => import("@/components/sheet-demo"));
const SheetBackdropVariantsDemo = lazy(() => import("@/components/sheet-backdrop-variants-demo"));
const SheetControlledDemo = lazy(() => import("@/components/sheet-controlled-demo"));
const SheetDetachedDemo = lazy(() => import("@/components/sheet-detached-demo"));
const SheetEmojiPickerSheetDemo = lazy(() => import("@/components/sheet-emoji-picker-sheet-demo"));
const SheetHandleOnlyDemo = lazy(() => import("@/components/sheet-handle-only-demo"));
const SheetNestedDemo = lazy(() => import("@/components/sheet-nested-demo"));
const SheetNonDismissableDemo = lazy(() => import("@/components/sheet-non-dismissable-demo"));
const SheetPlacementsDemo = lazy(() => import("@/components/sheet-placements-demo"));
const SheetProfessionsPickerDemo = lazy(() => import("@/components/sheet-professions-picker-demo"));
const SheetScrollableContentDemo = lazy(() => import("@/components/sheet-scrollable-content-demo"));
const SheetSlackMessageActionsDemo = lazy(() => import("@/components/sheet-slack-message-actions-demo"));
const SheetSnapPointsDemo = lazy(() => import("@/components/sheet-snap-points-demo"));
const SheetSnapPointsCustomFadeDemo = lazy(() => import("@/components/sheet-snap-points-custom-fade-demo"));
const SheetSnapPointsSequentialDemo = lazy(() => import("@/components/sheet-snap-points-sequential-demo"));
const SheetWithFormDemo = lazy(() => import("@/components/sheet-with-form-demo"));
const StepperDemo = lazy(() => import("@/components/stepper-demo"));
const StepperPackageTrackingDemo = lazy(() => import("@/components/stepper-package-tracking-demo"));
const StepperBulletStepsDemo = lazy(() => import("@/components/stepper-bullet-steps-demo"));
const StepperControlledDemo = lazy(() => import("@/components/stepper-controlled-demo"));
const StepperControlledVerticalDemo = lazy(() => import("@/components/stepper-controlled-vertical-demo"));
const StepperCustomColorDemo = lazy(() => import("@/components/stepper-custom-color-demo"));
const StepperCustomColorVerticalDemo = lazy(() => import("@/components/stepper-custom-color-vertical-demo"));
const StepperCustomCompletedIconDemo = lazy(() => import("@/components/stepper-custom-completed-icon-demo"));
const StepperDisplayOnlyDemo = lazy(() => import("@/components/stepper-display-only-demo"));
const StepperDynamicIconDemo = lazy(() => import("@/components/stepper-dynamic-icon-demo"));
const StepperFreeTrialTimelineDemo = lazy(() => import("@/components/stepper-free-trial-timeline-demo"));
const StepperOnboardingTimelineDemo = lazy(() => import("@/components/stepper-onboarding-timeline-demo"));
const StepperRenderFunctionDemo = lazy(() => import("@/components/stepper-render-function-demo"));
const StepperSizesDemo = lazy(() => import("@/components/stepper-sizes-demo"));
const StepperVerticalDemo = lazy(() => import("@/components/stepper-vertical-demo"));
const StepperVerticalSizesDemo = lazy(() => import("@/components/stepper-vertical-sizes-demo"));
const StepperVerticalWithIconsDemo = lazy(() => import("@/components/stepper-vertical-with-icons-demo"));
const StepperWithDescriptionsDemo = lazy(() => import("@/components/stepper-with-descriptions-demo"));
const StepperWithIconsDemo = lazy(() => import("@/components/stepper-with-icons-demo"));
const TaskCalendarDemo = lazy(() => import("@/components/task-calendar-demo"));
const TrendChipDemo = lazy(() => import("@/components/trend-chip-demo"));
const TrendChipCustomIndicatorDemo = lazy(() => import("@/components/trend-chip-custom-indicator-demo"));
const TrendChipPrefixAndSuffixDemo = lazy(() => import("@/components/trend-chip-prefix-and-suffix-demo"));
const TrendChipSizesDemo = lazy(() => import("@/components/trend-chip-sizes-demo"));
const TrendChipTabularNumsDemo = lazy(() => import("@/components/trend-chip-tabular-nums-demo"));
const TrendChipVariantsDemo = lazy(() => import("@/components/trend-chip-variants-demo"));
const WidgetDemo = lazy(() => import("@/components/widget-demo"));
const WidgetWithBarChartDemo = lazy(() => import("@/components/widget-with-bar-chart-demo"));
const WidgetWithLineChartDemo = lazy(() => import("@/components/widget-with-line-chart-demo"));
const WidgetWithPieChartDemo = lazy(() => import("@/components/widget-with-pie-chart-demo"));
const WidgetWithKpisDemo = lazy(() => import("@/components/widget-with-kpis-demo"));
const WidgetUsageSummaryDemo = lazy(() => import("@/components/widget-usage-summary-demo"));
const WidgetWithTableDemo = lazy(() => import("@/components/widget-with-table-demo"));
const WidgetDashboardGridDemo = lazy(() => import("@/components/widget-dashboard-grid-demo"));

// ---------------------------------------------------------------------------
// Navigation configuration
// ---------------------------------------------------------------------------

const navSections = [
  {
    section: "Charts",
    items: [
      {key: "area-chart", label: "Area Chart"},
      {key: "bar-chart", label: "Bar Chart"},
      {key: "composed-chart", label: "Composed Chart"},
      {key: "line-chart", label: "Line Chart"},
      {key: "pie-chart", label: "Pie Chart"},
      {key: "radar-chart", label: "Radar Chart"},
      {key: "radial-chart", label: "Radial Chart"},
    ],
  },
  {
    section: "Dashboard",
    items: [
      {key: "widget", label: "Widget"},
      {key: "kpi", label: "KPI"},
      {key: "kpi-group", label: "KPI Group"},
      {key: "trend-chip", label: "Trend Chip"},
    ],
  },
  {
    section: "Data Display",
    items: [
      {key: "data-grid", label: "Data Grid"},
      {key: "list-view", label: "List View"},
      {key: "file-tree", label: "File Tree"},
      {key: "carousel", label: "Carousel"},
      {key: "item-card", label: "Item Card"},
      {key: "item-card-group", label: "Item Card Group"},
      {key: "hover-card", label: "Hover Card"},
      {key: "floating-toc", label: "Floating TOC"},
      {key: "empty-state", label: "Empty State"},
    ],
  },
  {
    section: "Calendar",
    items: [{key: "task-calendar", label: "Task Calendar"}],
  },
  {
    section: "Kanban",
    items: [{key: "kanban", label: "Kanban"}],
  },
  {
    section: "Navigation",
    items: [
      {key: "app-layout", label: "App Layout"},
      {key: "navbar", label: "Navbar"},
      {key: "sidebar", label: "Sidebar"},
      {key: "segment", label: "Segment"},
      {key: "stepper", label: "Stepper"},
      {key: "command", label: "Command"},
      {key: "context-menu", label: "Context Menu"},
      {key: "action-bar", label: "Action Bar"},
    ],
  },
  {
    section: "Forms",
    items: [
      {key: "rating", label: "Rating"},
      {key: "number", label: "Number"},
      {key: "selection", label: "Selection"},
      {key: "inline-select", label: "Inline Select"},
      {key: "native-select", label: "Native Select"},
      {key: "cell-controls", label: "Cell Controls"},
      {key: "drop-zone", label: "Drop Zone"},
    ],
  },
  {
    section: "Overlays & Feedback",
    items: [
      {key: "sheet", label: "Sheet"},
      {key: "emoji-picker", label: "Emoji Picker"},
      {key: "emoji-reaction", label: "Emoji Reaction"},
      {key: "pressable", label: "Pressable Feedback"},
    ],
  },
  {
    section: "Layout",
    items: [{key: "resizable", label: "Resizable"}],
  },
];

// ---------------------------------------------------------------------------
// Per-page content map
// ---------------------------------------------------------------------------

const contentMap: Record<string, React.ReactNode> = {
  "area-chart": (
    <div className="flex flex-wrap justify-center gap-6">
      <AreaChartDemo />
      <AreaChartCustomTooltipDemo />
      <AreaChartMultiAreaDemo />
      <AreaChartStackedDemo />
      <AreaChartKpiDemo />
      <AreaChartSparklineDemo />
    </div>
  ),
  "bar-chart": (
    <div className="flex flex-wrap justify-center gap-6">
      <BarChartDemo />
      <BarChartComparisonDemo />
      <BarChartCustomTooltipDemo />
      <BarChartGroupedDemo />
      <BarChartHorizontalDemo />
      <BarChartHorizontalStackedDemo />
      <BarChartKpiDemo />
      <BarChartStackedDemo />
    </div>
  ),
  "composed-chart": (
    <div className="flex flex-wrap justify-center gap-6">
      <ComposedChartDemo />
      <ComposedChartStackedBarWithLineDemo />
      <ComposedChartAreaWithLineDemo />
      <ComposedChartBarWithAreaDemo />
      <ComposedChartMultiTypeDemo />
    </div>
  ),
  "line-chart": (
    <div className="flex flex-wrap justify-center gap-6">
      <LineChartDemo />
      <LineChartDashedComparisonDemo />
      <LineChartKpiDemo />
      <LineChartMultiColorDemo />
      <LineChartPortfolioDemo />
      <LineChartSparklineDemo />
      <LineChartStatsDemo />
      <LineChartTrafficSourceDemo />
      <LineChartCustomTooltipDemo />
      <LineChartWithDotsDemo />
    </div>
  ),
  "pie-chart": (
    <div className="flex flex-wrap justify-center gap-6">
      <PieChartDemo />
      <PieChartCustomTooltipDemo />
      <PieChartDonutDemo />
      <PieChartDonutWithContentDemo />
      <PieChartDonutWithLabelDemo />
      <PieChartNestedDonutDemo />
      <PieChartWithBreakdownDemo />
    </div>
  ),
  "radar-chart": (
    <div className="flex flex-wrap justify-center gap-6">
      <RadarChartDemo />
      <RadarChartComparisonDemo />
      <RadarChartDotsOnlyDemo />
      <RadarChartMultiSeriesDemo />
      <RadarChartWithRadiusAxisDemo />
    </div>
  ),
  "radial-chart": (
    <div className="flex flex-wrap justify-center gap-6">
      <RadialChartDemo />
      <RadialChartGaugeDemo />
      <RadialChartGaugeGridDemo />
      <RadialChartProgressRingDemo />
      <RadialChartWithLegendDemo />
    </div>
  ),
  widget: (
    <div className="flex flex-wrap justify-center gap-6">
      <WidgetDemo />
      <WidgetWithBarChartDemo />
      <WidgetWithLineChartDemo />
      <WidgetWithPieChartDemo />
      <WidgetWithKpisDemo />
      <WidgetUsageSummaryDemo />
      <WidgetWithTableDemo />
      <WidgetDashboardGridDemo />
    </div>
  ),
  kpi: (
    <div className="flex flex-wrap justify-center gap-6">
      <KpiDemo />
      <KpiWithActionsDemo />
      <KpiWithChartBottomDemo />
      <KpiWithChartInlineDemo />
      <KpiWithFooterDemo />
      <KpiWithIconDemo />
      <KpiWithProgressDemo />
    </div>
  ),
  "kpi-group": (
    <div className="flex flex-wrap justify-center gap-6">
      <KpiGroupDemo />
      <KpiGroupVerticalDemo />
      <KpiGroupWithFromSuffixDemo />
    </div>
  ),
  "trend-chip": (
    <div className="flex flex-wrap justify-center gap-6">
      <TrendChipDemo />
      <TrendChipCustomIndicatorDemo />
      <TrendChipPrefixAndSuffixDemo />
      <TrendChipSizesDemo />
      <TrendChipTabularNumsDemo />
      <TrendChipVariantsDemo />
    </div>
  ),
  "data-grid": (
    <div className="flex flex-wrap justify-center gap-6">
      <DataGridDemo />
      <DataGridPinnedColumnsDemo />
      <DataGridDragAndDropDemo />
      <DataGridExpandableRowsDemo />
      <DataGridEditableCellsDemo />
      <DataGridEmptyStateDemo />
      <DataGridAsyncLoadingDemo />
      <DataGridVirtualizedDemo />
      <DataGridBulkActionsDemo />
      <DataGridUsersDemo />
      <DataGridTeamMembersDemo />
      <DataGridServersDemo />
    </div>
  ),
  "list-view": (
    <div className="flex flex-wrap justify-center gap-6">
      <ListViewDemo />
      <ListViewSelectionModesDemo />
      <ListViewSecondaryDemo />
      <ListViewDisabledItemsDemo />
      <ListViewWithActionBarDemo />
    </div>
  ),
  "file-tree": (
    <div className="flex flex-wrap justify-center gap-6">
      <FileTreeDemo />
      <FileTreeReducedMotionDemo />
      <FileTreeWithIconsDemo />
      <FileTreeCustomIndicatorDemo />
      <FileTreeDragAndDropDemo />
      <FileTreeDynamicCollectionDemo />
      <FileTreeSizesDemo />
      <FileTreeGuideLinesDemo />
      <FileTreeMultipleSelectionDemo />
      <FileTreePRFileReviewDemo />
    </div>
  ),
  carousel: (
    <div className="flex flex-wrap justify-center gap-6">
      <CarouselDemo />
      <CarouselModalTypeDemo />
      <CarouselMultipleSlidesDemo />
      <CarouselLoopDemo />
      <CarouselAutoplayDemo />
      <CarouselApiAccessDemo />
    </div>
  ),
  "item-card": (
    <div className="flex flex-wrap justify-center gap-6">
      <ItemCardDemo />
      <ItemCardDeviceListDemo />
      <ItemCardEmailSettingDemo />
      <ItemCardPressableDemo />
      <ItemCardTitleOnlyDemo />
      <ItemCardVariantsDemo />
      <ItemCardVerticalStackDemo />
      <ItemCardWalletCardDemo />
      <ItemCardWithMultiSelectDemo />
      <ItemCardWithSelectDemo />
      <ItemCardWithSwitchDemo />
      <ItemCardWithoutIconDemo />
    </div>
  ),
  "item-card-group": (
    <div className="flex flex-wrap justify-center gap-6">
      <ItemCardGroupDemo />
      <ItemCardGroupDeveloperSettingsDemo />
      <ItemCardGroupGridDemo />
      <ItemCardGroupGridThreeColumnsDemo />
      <ItemCardGroupLinkedAccountsDemo />
      <ItemCardGroupListDemo />
      <ItemCardGroupMultipleSectionsDemo />
      <ItemCardGroupNotificationPreferencesDemo />
      <ItemCardGroupPermissionLevelsDemo />
      <ItemCardGroupPressableDemo />
      <ItemCardGroupVariantsDemo />
      <ItemCardGroupWalletListDemo />
      <ItemCardGroupWithHeaderDemo />
    </div>
  ),
  "hover-card": (
    <div className="flex flex-wrap justify-center gap-6">
      <HoverCardDemo />
      <HoverCardControlledDemo />
      <HoverCardCustomDelaysDemo />
      <HoverCardPlacementsDemo />
      <HoverCardWithArrowDemo />
      <HoverCardWithImageDemo />
    </div>
  ),
  "floating-toc": (
    <div className="flex flex-wrap justify-center gap-6">
      <FloatingTocDemo />
      <FloatingTocControlledDemo />
      <FloatingTocCustomDelaysDemo />
      <FloatingTocHierarchicalDemo />
      <FloatingTocInPageContextDemo />
      <FloatingTocLeftAlignedBarsDemo />
      <FloatingTocLeftPlacementDemo />
      <FloatingTocPressModeDemo />
      <FloatingTocPressModeInPageDemo />
      <FloatingTocVirtualizedDemo />
    </div>
  ),
  "empty-state": (
    <div className="flex flex-wrap justify-center gap-6">
      <EmptyStateDemo />
      <EmptyStateMinimalDemo />
      <EmptyStateOutlineDemo />
      <EmptyStateSizesDemo />
      <EmptyStateFullHeightDemo />
      <EmptyStateWithAvatarDemo />
      <EmptyStateWithAvatarGroupDemo />
      <EmptyStateWithBackgroundDemo />
    </div>
  ),
  "task-calendar": (
    <div className="flex flex-col items-center gap-6">
      <TaskCalendarDemo />
      <JeDatePickerDemo />
    </div>
  ),
  kanban: (
    <div className="flex flex-col gap-10">
      <KanbanDemo />
      <KanbanNotionBoardDemo />
      <KanbanProjectBoardDemo />
      <KanbanSizesDemo />
    </div>
  ),
  "app-layout": (
    <div className="flex flex-col gap-8">
      <AppLayoutDemo />
      <AppLayoutOffcanvasDemo />
      <AppLayoutInsetSidebarDemo />
      <AppLayoutFloatingSidebarDemo />
      <AppLayoutWithAsideDemo />
      <AppLayoutWithBreadcrumbsDemo />
      <AppLayoutResizableDemo />
      <AppLayoutToolbarFooterDemo />
    </div>
  ),
  navbar: (
    <div className="flex flex-wrap justify-center gap-6">
      <NavbarProDemo />
      <NavbarProDocsSiteDemo />
      <NavbarProWithDropdownsDemo />
      <NavbarProDashboardDemo />
      <NavbarProCompactDemo />
      <NavbarProWithMenuDemo />
      <NavbarProHideOnScrollDemo />
    </div>
  ),
  sidebar: (
    <div className="flex flex-wrap justify-center gap-6">
      <SidebarDemo />
      <SidebarComplexDemo />
      <SidebarCompactWithUserMenuDemo />
      <SidebarAgentHubDemo />
      <SidebarAgentWorkspaceDemo />
      <SidebarInsetVariantDemo />
      <SidebarWithGroupsDemo />
      <SidebarCollapsibleGroupsDemo />
      <SidebarCollapsibleDemo />
      <SidebarFloatingVariantDemo />
      <SidebarWithAvatarDemo />
      <SidebarRightSideDemo />
      <SidebarIconOnlyDemo />
    </div>
  ),
  segment: (
    <div className="flex flex-wrap justify-center gap-6">
      <SegmentDemo />
      <SegmentWithoutSeparatorsDemo />
      <SegmentControlledDemo />
      <SegmentDisabledDemo />
      <SegmentDisabledItemDemo />
      <SegmentSizesDemo />
      <SegmentThemeSwitcherDemo />
      <SegmentTwoItemsDemo />
      <SegmentWithIconsDemo />
    </div>
  ),
  stepper: (
    <div className="flex flex-wrap justify-center gap-6">
      <StepperDemo />
      <StepperPackageTrackingDemo />
      <StepperBulletStepsDemo />
      <StepperControlledDemo />
      <StepperControlledVerticalDemo />
      <StepperCustomColorDemo />
      <StepperCustomColorVerticalDemo />
      <StepperCustomCompletedIconDemo />
      <StepperDisplayOnlyDemo />
      <StepperDynamicIconDemo />
      <StepperFreeTrialTimelineDemo />
      <StepperOnboardingTimelineDemo />
      <StepperRenderFunctionDemo />
      <StepperSizesDemo />
      <StepperVerticalDemo />
      <StepperVerticalSizesDemo />
      <StepperVerticalWithIconsDemo />
      <StepperWithDescriptionsDemo />
      <StepperWithIconsDemo />
    </div>
  ),
  command: (
    <div className="flex flex-wrap justify-center gap-6">
      <CommandDemo />
      <CommandCleanDemo />
      <CommandDevToolbarDemo />
      <CommandLauncherDemo />
      <CommandMinimalDemo />
      <CommandSplitViewDemo />
      <CommandMultipleSearchTermsDemo />
      <CommandSizesDemo />
      <CommandBackdropVariantsDemo />
    </div>
  ),
  "context-menu": (
    <div className="flex flex-wrap justify-center gap-6">
      <ContextMenuDemo />
      <ContextMenuControlledDemo />
      <ContextMenuDisabledDemo />
      <ContextMenuLongPressDemo />
      <ContextMenuWithSectionsDemo />
      <ContextMenuWithSelectionDemo />
      <ContextMenuWithSubmenusDemo />
    </div>
  ),
  "action-bar": (
    <div className="flex flex-wrap justify-center gap-6">
      <ActionBarDemo />
      <ActionBarWithDataGridDemo />
    </div>
  ),
  rating: (
    <div className="flex flex-wrap justify-center gap-6">
      <RatingDemo />
      <RatingControlledDemo />
      <RatingCustomColorDemo />
      <RatingCustomIconHeartDemo />
      <RatingCustomIconPerItemDemo />
      <RatingDisabledDemo />
      <RatingProductReviewDemo />
      <RatingReadOnlyDemo />
      <RatingReadOnlyFractionalDemo />
      <RatingRenderFunctionDemo />
      <RatingSizesDemo />
      <RatingWithLabelDemo />
    </div>
  ),
  number: (
    <div className="flex flex-wrap justify-center gap-6">
      <NumberValueDemo />
      <NumberValueCompactDemo />
      <NumberValueCurrencyDemo />
      <NumberValueFormatOptionsDemo />
      <NumberValuePercentDemo />
      <NumberValueSignDisplayDemo />
      <NumberValueTabularNumsDemo />
      <NumberValueWithPrefixSuffixDemo />
      <NumberStepperDemo />
      <NumberStepperGuestPickerDemo />
      <NumberStepperControlledDemo />
      <NumberStepperCustomIconsDemo />
      <NumberStepperCustomValueDemo />
      <NumberStepperDisabledDemo />
      <NumberStepperMinMaxValuesDemo />
      <NumberStepperReversedLayoutDemo />
      <NumberStepperSizesDemo />
      <NumberStepperWithCustomButtonsDemo />
      <NumberStepperWithFormatOptionsDemo />
      <NumberStepperWithLabelDemo />
      <NumberStepperWithStepDemo />
    </div>
  ),
  selection: (
    <div className="flex flex-wrap justify-center gap-6">
      <RadioButtonGroupDemo />
      <RadioButtonGroupDeliveryAndPaymentDemo />
      <RadioButtonGroupSubscriptionPlansDemo />
      <RadioButtonGroupControlledDemo />
      <RadioButtonGroupCustomIndicatorDemo />
      <RadioButtonGroupDisabledGroupDemo />
      <RadioButtonGroupGridLayoutDemo />
      <RadioButtonGroupIconCardsDemo />
      <RadioButtonGroupNoIndicatorDemo />
      <RadioButtonGroupRenderPropChildrenDemo />
      <RadioButtonGroupWithIconsDemo />
      <RadioButtonGroupWithRippleDemo />
      <CheckboxButtonGroupDemo />
      <CheckboxButtonGroupCustomIndicatorDemo />
      <CheckboxButtonGroupGridLayoutDemo />
      <CheckboxButtonGroupNoIndicatorDemo />
      <CheckboxButtonGroupWithIconsDemo />
      <CheckboxButtonGroupWithRippleDemo />
    </div>
  ),
  "inline-select": (
    <div className="flex flex-wrap justify-center gap-6">
      <InlineSelectDemo />
      <InlineSelectTeamSwitcherDemo />
      <InlineSelectCustomIndicatorDemo />
      <InlineSelectMultiSelectDemo />
      <InlineSelectPlacementsDemo />
    </div>
  ),
  "native-select": (
    <div className="flex flex-wrap justify-center gap-6">
      <NativeSelectDemo />
      <NativeSelectControlledDemo />
      <NativeSelectCustomIndicatorDemo />
      <NativeSelectDisabledSelectDemo />
      <NativeSelectFormExampleDemo />
      <NativeSelectFullWidthDemo />
      <NativeSelectInvalidStateDemo />
      <NativeSelectVariantsDemo />
      <NativeSelectWithDescriptionDemo />
      <NativeSelectWithDisabledOptionsDemo />
      <NativeSelectWithGroupsDemo />
      <NativeSelectWithLabelDemo />
    </div>
  ),
  "cell-controls": (
    <div className="flex flex-wrap justify-center gap-6">
      <CellSwitchDemo />
      <CellSwitchControlledDemo />
      <CellSwitchDisabledDemo />
      <CellSwitchFeatureAnnouncementDemo />
      <CellSwitchSecondaryGroupDemo />
      <CellSwitchSettingsGroupDemo />
      <CellSwitchVariantsDemo />
      <CellSliderDemo />
      <CellSliderControlledDemo />
      <CellSliderDisabledDemo />
      <CellSliderIntegerStepDemo />
      <CellSliderSecondaryGroupDemo />
      <CellSliderSettingsGroupDemo />
      <CellSliderVariantsDemo />
      <CellSelectDemo />
      <CellSelectControlledDemo />
      <CellSelectCustomValueDemo />
      <CellSelectDisabledDemo />
      <CellSelectFontFamilyDemo />
      <CellSelectSettingsGroupDemo />
      <CellSelectVariantsDemo />
      <CellColorPickerDemo />
      <CellColorPickerControlledDemo />
      <CellColorPickerDisabledDemo />
      <CellColorPickerSettingsGroupDemo />
      <CellColorPickerVariantsDemo />
      <CellColorPickerWithPresetsDemo />
    </div>
  ),
  "drop-zone": (
    <div className="flex flex-wrap justify-center gap-6">
      <DropZoneDemo />
      <DropZoneWithFileListDemo />
      <DropZoneCompactFileListDemo />
      <DropZoneDisabledDemo />
      <DropZoneImageOnlyDemo />
      <DropZoneMaxSizeLimitDemo />
      <DropZoneMultipleFilesDemo />
      <DropZoneCustomIconDemo />
      <DropZoneCustomTriggersDemo />
    </div>
  ),
  sheet: (
    <div className="flex flex-wrap justify-center gap-6">
      <SheetDemo />
      <SheetBackdropVariantsDemo />
      <SheetControlledDemo />
      <SheetDetachedDemo />
      <SheetEmojiPickerSheetDemo />
      <SheetHandleOnlyDemo />
      <SheetNestedDemo />
      <SheetNonDismissableDemo />
      <SheetPlacementsDemo />
      <SheetProfessionsPickerDemo />
      <SheetScrollableContentDemo />
      <SheetSlackMessageActionsDemo />
      <SheetSnapPointsDemo />
      <SheetSnapPointsCustomFadeDemo />
      <SheetSnapPointsSequentialDemo />
      <SheetWithFormDemo />
    </div>
  ),
  "emoji-picker": (
    <div className="flex flex-wrap justify-center gap-6">
      <EmojiPickerDemo />
      <EmojiPickerCustomCategoriesDemo />
      <EmojiPickerInlineDemo />
      <EmojiPickerSizesDemo />
    </div>
  ),
  "emoji-reaction": (
    <div className="flex flex-wrap justify-center gap-6">
      <EmojiReactionButtonDemo />
      <EmojiReactionButtonDisabledDemo />
      <EmojiReactionButtonSizesDemo />
    </div>
  ),
  pressable: (
    <div className="flex flex-wrap justify-center gap-6">
      <PressableFeedbackDemo />
      <PressableFeedbackComparisonDemo />
      <PressableFeedbackDisabledDemo />
      <PressableFeedbackHoldConfirmCallbackDemo />
      <PressableFeedbackHoldConfirmDurationsDemo />
      <PressableFeedbackHoldConfirmSweepDemo />
      <PressableFeedbackPressableCardsDemo />
      <PressableFeedbackProgressFeedbackCallbackDemo />
      <PressableFeedbackProgressFeedbackDurationsDemo />
      <PressableFeedbackProgressFeedbackNoResetDemo />
      <PressableFeedbackProgressFeedbackSweepDemo />
      <PressableFeedbackStandaloneHighlightDemo />
      <PressableFeedbackStandaloneRippleDemo />
      <PressableFeedbackWithHighlightDemo />
      <PressableFeedbackWithHoldConfirmDemo />
      <PressableFeedbackWithProgressFeedbackDemo />
      <PressableFeedbackWithRippleDemo />
    </div>
  ),
  resizable: (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl mx-auto">
      <ResizableDemo />
      <ResizableVerticalDemo />
      <ResizableTypesDemo />
      <ResizableVariantsDemo />
      <ResizableNestedDemo />
      <ResizableWithCollapseDemo />
      <ResizableWithIndicatorDemo />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function Page() {
  const [activeKey, setActiveKey] = useState("area-chart");
  const activeLabel =
    navSections.flatMap((s) => s.items).find((item) => item.key === activeKey)?.label ?? "";

  return (
    <div className="flex flex-1 min-h-0">
      {/* Sidebar */}
      <aside className="w-[200px] shrink-0 overflow-y-auto border-r border-divider bg-content1 py-4">
        {navSections.map(({section, items}) => (
          <div key={section} className="mb-4 px-2">
            <p className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-wider text-default-500">
              {section}
            </p>
            {items.map(({key, label}) => (
              <button
                key={key}
                className={`w-full rounded-lg px-3 py-1.5 text-left text-sm transition-colors ${
                  activeKey === key
                    ? "bg-background font-medium text-foreground shadow-sm"
                    : "text-default-500 hover:bg-default-100 hover:text-foreground"
                }`}
                onClick={() => setActiveKey(key)}
              >
                {label}
              </button>
            ))}
          </div>
        ))}
      </aside>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <h1 className="mb-8 text-2xl font-bold text-foreground">{activeLabel}</h1>
          <Suspense
            fallback={
              <div className="flex h-32 items-center justify-center text-sm text-default-400">
                Loading...
              </div>
            }
          >
            {contentMap[activeKey]}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
