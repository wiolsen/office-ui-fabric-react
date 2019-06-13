import { HighContrastSelector } from '../../../Styling';
import { ISplitButtonComponent, ISplitButtonStylesReturnType, ISplitButtonTokenReturnType } from './SplitButton.types';

const baseTokens: ISplitButtonComponent['tokens'] = (props, theme): ISplitButtonTokenReturnType => {
  const { effects, palette, semanticColors } = theme;
  return {
    backgroundColor: palette.white,
    backgroundColorHovered: palette.neutralLighter,
    backgroundColorPressed: semanticColors.buttonBackgroundPressed,
    borderColor: semanticColors.buttonBorder,
    borderColorHovered: semanticColors.buttonBorder,
    borderColorPressed: semanticColors.buttonBorder,
    borderRadius: effects.roundedCorner2,
    borderWidth: 1,
    color: semanticColors.buttonText,
    contentPadding: '0px 19px',
    dividerColor: semanticColors.menuDivider,
    minHeight: 35,
    minWidth: 0,
    secondaryPadding: '0px 10px'
  };
};

const primaryTokens: ISplitButtonComponent['tokens'] = (props, theme): ISplitButtonTokenReturnType => {
  const { palette, semanticColors } = theme;
  return {
    backgroundColor: semanticColors.primaryButtonBackground,
    backgroundColorHovered: semanticColors.primaryButtonBackgroundHovered,
    backgroundColorPressed: semanticColors.primaryButtonBackgroundPressed,
    borderWidth: 0,
    color: semanticColors.primaryButtonText,
    dividerColor: palette.white,
    highContrastBackgroundColor: 'WindowText',
    highContrastBackgroundColorHovered: 'Highlight',
    highContrastBackgroundColorPressed: 'Highlight',
    highContrastColor: 'Window'
  };
};

const disabledTokens: ISplitButtonComponent['tokens'] = (props, theme): ISplitButtonTokenReturnType => {
  const { semanticColors } = theme;
  return {
    backgroundColor: semanticColors.buttonBackgroundDisabled,
    backgroundColorHovered: semanticColors.buttonBackgroundDisabled,
    backgroundColorPressed: semanticColors.buttonBackgroundDisabled,
    borderColor: semanticColors.buttonBorderDisabled,
    borderColorHovered: semanticColors.buttonBorderDisabled,
    borderColorPressed: semanticColors.buttonBorderDisabled,
    color: semanticColors.disabledText,
    dividerColor: semanticColors.menuDivider,
    highContrastColor: 'GrayText'
  };
};

export const SplitButtonTokens: ISplitButtonComponent['tokens'] = (props, theme): ISplitButtonTokenReturnType => [
  baseTokens,
  props.primary && primaryTokens,
  props.disabled && disabledTokens
];

export const SplitButtonStyles: ISplitButtonComponent['styles'] = (props, theme, tokens): ISplitButtonStylesReturnType => {
  const { semanticColors } = theme;

  return {
    root: {
      borderRadius: tokens.borderRadius,
      boxSizing: 'border-box',
      display: 'inline-flex',
      zIndex: 1,

      selectors: {
        [HighContrastSelector]: {
          borderColor: 'transparent'
        },
        ':hover': {
          borderColor: props.primaryActionDisabled ? 'transparent' : tokens.borderColorHovered
        },
        ':active': {
          borderColor: props.primaryActionDisabled ? 'transparent' : tokens.borderColorPressed
        }
      }
    },
    button: {
      borderBottomLeftRadius: tokens.borderRadius,
      borderBottomRightRadius: '0px',
      borderTopLeftRadius: tokens.borderRadius,
      borderTopRightRadius: '0px',
      borderBottomWidth: tokens.borderWidth,
      borderLeftWidth: tokens.borderWidth,
      borderRightWidth: 0,
      borderTopWidth: tokens.borderWidth,
      minHeight: tokens.minHeight,
      minWidth: tokens.minWidth,

      selectors: {
        '+ *': {
          backgroundColor: props.primaryActionDisabled ? semanticColors.buttonBackgroundDisabled : tokens.backgroundColor
        },
        ':hover': {
          borderColor: props.primaryActionDisabled ? 'transparent' : tokens.borderColorHovered,

          selectors: {
            '+ *': {
              backgroundColor: props.primaryActionDisabled ? semanticColors.buttonBackgroundDisabled : tokens.backgroundColorHovered,

              selectors: {
                [HighContrastSelector]: {
                  backgroundColor: tokens.highContrastBackgroundColorHovered
                }
              }
            }
          }
        },
        ':active': {
          borderColor: props.primaryActionDisabled ? 'transparent' : tokens.borderColorPressed,

          selectors: {
            '+ *': {
              backgroundColor: props.primaryActionDisabled ? semanticColors.buttonBackgroundDisabled : tokens.backgroundColorPressed,

              selectors: {
                [HighContrastSelector]: {
                  backgroundColor: tokens.highContrastBackgroundColorPressed
                }
              }
            }
          }
        }
      }
    },
    splitDividerContainer: {
      borderBottomColor: tokens.borderColor,
      borderTopColor: tokens.borderColor,
      borderStyle: 'solid',
      borderBottomWidth: props.primaryActionDisabled ? 0 : tokens.borderWidth,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: props.primaryActionDisabled ? 0 : tokens.borderWidth,
      boxSizing: 'border-box',
      height: 'auto',
      width: 'auto',

      selectors: {
        [HighContrastSelector]: {
          backgroundColor: tokens.highContrastBackgroundColor,
          borderColor: tokens.highContrastColor
        },
        ':hover': {
          borderColor: tokens.borderColorHovered
        },
        ':active': {
          borderColor: tokens.borderColorPressed
        }
      }
    },
    splitDivider: {
      backgroundColor: props.primaryActionDisabled ? semanticColors.menuDivider : tokens.dividerColor,
      display: 'inline-block',
      height: '100%',
      margin: '7px 0px',
      width: '1px'
    },
    menuButton: {
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: tokens.borderRadius,
      borderTopLeftRadius: '0px',
      borderTopRightRadius: tokens.borderRadius,
      borderStyle: 'solid',
      borderBottomWidth: tokens.borderWidth,
      borderLeftWidth: 0,
      borderRightWidth: tokens.borderWidth,
      borderTopWidth: tokens.borderWidth,
      boxSizing: 'border-box',
      height: '100%'
    }
  };
};
