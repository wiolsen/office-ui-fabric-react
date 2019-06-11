import { ICalendarPickerStyleProps, ICalendarPickerStyles } from './CalendarPicker.types';
import { normalize, FontSizes, FontWeights, getFocusStyle } from '@uifabric/styling';

export const getStyles = (props: ICalendarPickerStyleProps): ICalendarPickerStyles => {
  const { className, theme, hasHeaderClickCallback, highlightCurrent, highlightSelected } = props;
  const { palette } = theme;

  return {
    root: [
      normalize,
      {
        width: 196,
        padding: 12,
        boxSizing: 'content-box'
      },
      className
    ],
    headerContainer: {
      display: 'flex'
    },
    currentItemButton: [
      getFocusStyle(theme, { inset: -1 }),
      {
        fontSize: FontSizes.medium,
        fontWeight: FontWeights.semibold,
        textAlign: 'left',
        backgroundColor: 'transparent',
        flexGrow: 1,
        padding: '0 4px 0 10px',
        border: 'none'
      },
      hasHeaderClickCallback && {
        selectors: {
          '&:hover, &:active': {
            cursor: !hasHeaderClickCallback ? 'default' : 'pointer',
            color: palette.neutralDark,
            outline: '1px solid transparent',
            backgroundColor: palette.neutralLight
          }
        }
      }
    ],
    navigationButtonsContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    navigationButton: [
      getFocusStyle(theme, { inset: -1 }),
      {
        width: 28,
        minWidth: 28,
        height: 28,
        minHeight: 28,
        display: 'block',
        textAlign: 'center',
        lineHeight: 28,
        fontSize: FontSizes.small,
        color: palette.neutralPrimary,
        borderRadius: 2,
        position: 'relative',
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0,
        selectors: {
          '&:hover': {
            color: palette.neutralDark,
            cursor: 'pointer',
            outline: '1px solid transparent',
            backgroundColor: palette.neutralLight
          }
        }
      }
    ],
    gridContainer: {
      marginTop: 4
    },
    buttonRow: {
      marginBottom: 16,
      selectors: {
        '&:nth-child(n + 3)': {
          marginBottom: 0
        }
      }
    },
    itemButton: [
      getFocusStyle(theme, { inset: -1 }),
      {
        width: 40,
        height: 40,
        minWidth: 40,
        minHeight: 40,
        lineHeight: 40,
        fontSize: FontSizes.small,
        padding: 0,
        margin: '0 12px 0 0',
        color: palette.neutralPrimary,
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: 2,
        selectors: {
          '&:nth-child(4n + 4)': {
            marginRight: 0
          },
          '&:nth-child(n + 9)': {
            marginBottom: 0
          },
          '& div': {
            fontWeight: FontWeights.regular
          },
          '&:hover': {
            color: palette.neutralDark,
            backgroundColor: palette.neutralLight,
            cursor: 'pointer',
            outline: '1px solid transparent'
          },
          '&:active': {
            backgroundColor: palette.themeLight
          }
        }
      }
    ],
    current: highlightCurrent
      ? {
          color: palette.white,
          backgroundColor: palette.themePrimary,
          selectors: {
            '& div': {
              fontWeight: FontWeights.semibold
            },
            '&:hover': {
              backgroundColor: palette.themePrimary
            }
          }
        }
      : {},
    selected: highlightSelected
      ? {
          color: palette.neutralPrimary,
          backgroundColor: palette.themeLight,
          fontWeight: FontWeights.semibold,
          selectors: {
            '& div': {
              fontWeight: FontWeights.semibold
            },
            '&:hover, &:active': {
              backgroundColor: palette.themeLight
            }
          }
        }
      : {},
    disabled: {
      selectors: {
        '&, &:disabled, & button': {
          color: palette.neutralTertiaryAlt,
          pointerEvents: 'none'
        }
      }
    }
  };
};
