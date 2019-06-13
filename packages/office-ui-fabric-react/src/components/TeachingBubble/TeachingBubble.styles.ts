import { ITeachingBubbleStyleProps, ITeachingBubbleStyles } from './TeachingBubble.types';
import {
  AnimationVariables,
  DefaultFontStyles,
  FontSizes,
  FontWeights,
  getGlobalClassNames,
  GlobalClassNames,
  IStyle,
  keyframes
} from '../../Styling';

const globalClassNames = {
  root: 'ms-TeachingBubble',
  body: 'ms-TeachingBubble-body',
  bodyContent: 'ms-TeachingBubble-bodycontent',
  closeButton: 'ms-TeachingBubble-closebutton',
  content: 'ms-TeachingBubble-content',
  footer: 'ms-TeachingBubble-footer',
  header: 'ms-TeachingBubble-header',
  headerIsCondensed: 'ms-TeachingBubble-header--condensed',
  headerIsSmall: 'ms-TeachingBubble-header--small',
  headerIsLarge: 'ms-TeachingBubble-header--large',
  headline: 'ms-TeachingBubble-headline',
  image: 'ms-TeachingBubble-image',
  primaryButton: 'ms-TeachingBubble-primaryButton',
  secondaryButton: 'ms-TeachingBubble-secondaryButton',
  subText: 'ms-TeachingBubble-subText',

  // TODO: Button global class name usage should be converted to a styles function once
  //        Button supports JS styling, which means these button names can be removed.
  button: 'ms-Button',
  buttonLabel: 'ms-Button-label'
};

const opacityFadeIn: string = keyframes({
  '0%': {
    opacity: 0,
    animationTimingFunction: AnimationVariables.easeFunction1,
    transform: 'scale3d(.90,.90,.90)'
  },
  '100%': {
    opacity: 1,
    transform: 'scale3d(1,1,1)'
  }
});

const rootStyle = (isWide?: boolean): IStyle[] => {
  return [
    {
      display: 'block',
      maxWidth: 364,
      border: 0,
      outline: 'transparent',
      width: 'calc(100% + 1px)',
      animationName: `${opacityFadeIn}`,
      animationDuration: '300ms',
      animationTimingFunction: 'linear',
      animationFillMode: 'both'
    },
    isWide && {
      maxWidth: 456
    }
  ];
};

const headerStyle = (
  classNames: Partial<GlobalClassNames<typeof globalClassNames>>,
  hasCondensedHeadline?: boolean,
  hasSmallHeadline?: boolean
): IStyle[] => {
  if (hasCondensedHeadline) {
    return [classNames.headerIsCondensed];
  }

  return [
    hasSmallHeadline && classNames.headerIsSmall,
    !hasSmallHeadline && classNames.headerIsLarge,
    {
      selectors: {
        ':not(:last-child)': {
          marginBottom: 14
        }
      }
    }
  ];
};

export const getStyles = (props: ITeachingBubbleStyleProps): ITeachingBubbleStyles => {
  const {
    calloutClassName,
    hasCondensedHeadline,
    hasSmallHeadline,
    isWide,
    primaryButtonClassName,
    secondaryButtonClassName,
    theme
  } = props;
  const hasLargeHeadline: boolean = !hasCondensedHeadline && !hasSmallHeadline;
  const { palette } = theme;
  const classNames = getGlobalClassNames(globalClassNames, theme);

  return {
    root: [classNames.root, theme.fonts.medium, calloutClassName],
    body: [
      classNames.body,
      {
        selectors: {
          ':not(:last-child)': {
            marginBottom: 20
          }
        }
      }
    ],
    bodyContent: [
      classNames.bodyContent,
      {
        padding: 20
      },
      isWide && {
        maxWidth: 302
      }
    ],
    closeButton: [
      classNames.closeButton,
      {
        position: 'absolute',
        right: 0,
        top: 0,
        borderRadius: 0,
        color: palette.white,
        fontSize: FontSizes.small,
        selectors: {
          ':hover': {
            background: palette.themeDarkAlt,
            color: palette.white
          },
          ':active': {
            background: palette.themeDark,
            color: palette.white
          }
        }
      }
    ],
    content: [
      classNames.content,
      ...rootStyle(isWide),
      isWide && {
        display: 'flex'
      }
    ],
    footer: [
      classNames.footer,
      {
        display: 'flex',
        alignItems: 'center',
        color: palette.white,
        selectors: {
          // TODO: global class name usage should be converted to a button styles function once Button supports JS styling
          [`.${classNames.button}:not(:first-child)`]: {
            marginLeft: 16
          }
        }
      }
    ],
    header: [
      classNames.header,
      ...headerStyle(classNames, hasCondensedHeadline, hasSmallHeadline),
      (hasCondensedHeadline || hasSmallHeadline) && [
        DefaultFontStyles.medium,
        {
          marginRight: 10,
          fontWeight: FontWeights.semibold
        }
      ]
    ],
    headline: [
      classNames.headline,
      {
        margin: 0,
        color: palette.white,
        fontWeight: FontWeights.semibold
      },
      hasLargeHeadline && [
        {
          fontSize: 20 // TODO: reevaluate after type ramp changes for fluent
        }
      ]
    ],
    imageContent: [
      classNames.header,
      classNames.image,
      isWide && {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20,
        maxWidth: 154
      }
    ],
    primaryButton: [
      classNames.primaryButton,
      primaryButtonClassName,
      {
        backgroundColor: palette.white,
        borderColor: palette.white,
        whiteSpace: 'nowrap',
        selectors: {
          // TODO: global class name usage should be converted to a button styles function once Button supports JS styling
          [`.${classNames.buttonLabel}`]: [
            DefaultFontStyles.medium,
            {
              color: palette.themePrimary
            }
          ],
          ':hover': {
            backgroundColor: palette.themeLighter,
            borderColor: palette.themeLighter
          },
          ':focus': {
            backgroundColor: palette.themeLighter,
            borderColor: palette.white
          },
          ':active': {
            backgroundColor: palette.white,
            borderColor: palette.white
          }
        }
      }
    ],
    secondaryButton: [
      classNames.secondaryButton,
      secondaryButtonClassName,
      {
        backgroundColor: palette.themePrimary,
        borderColor: palette.white,
        whiteSpace: 'nowrap',
        selectors: {
          // TODO: global class name usage should be converted to a button styles function once Button supports JS styling
          [`.${classNames.buttonLabel}`]: [
            DefaultFontStyles.medium,
            {
              color: palette.white
            }
          ],
          '&:hover, &:focus': {
            backgroundColor: palette.themeDarkAlt,
            borderColor: palette.white
          },
          ':active': {
            backgroundColor: palette.themePrimary,
            borderColor: palette.white
          }
        }
      }
    ],
    subText: [
      classNames.subText,
      {
        margin: 0,
        fontSize: FontSizes.medium,
        color: palette.white,
        fontWeight: FontWeights.semilight
      }
    ],
    subComponentStyles: {
      callout: {
        root: [...rootStyle(isWide), theme.fonts.medium],
        beak: [
          {
            background: palette.themePrimary
          }
        ],
        calloutMain: [
          {
            background: palette.themePrimary
          }
        ]
      }
    }
  };
};
