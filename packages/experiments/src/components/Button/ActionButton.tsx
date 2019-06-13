import * as React from 'react';
import { Button } from './Button';
import { IButtonComponent, IButtonProps, IButtonTokenReturnType } from './Button.types';
import { ButtonVariantsType } from './ButtonVariants.types';
import { FontWeights } from '../../Styling';

const baseTokens: IButtonComponent['tokens'] = (props, theme): IButtonTokenReturnType => {
  const { palette, semanticColors } = theme;

  return {
    backgroundColor: 'transparent',
    backgroundColorHovered: 'transparent',
    backgroundColorPressed: 'transparent',
    borderColor: 'transparent',
    borderColorHovered: 'transparent',
    borderColorPressed: 'transparent',
    color: semanticColors.buttonText,
    colorHovered: palette.themePrimary,
    colorPressed: palette.black,
    contentPadding: '0px 8px',
    height: '40px',
    iconColor: semanticColors.buttonText,
    iconColorHovered: palette.themePrimary,
    iconColorPressed: palette.black,
    textWeight: FontWeights.regular
  };
};

const disabledTokens: IButtonComponent['tokens'] = (props, theme): IButtonTokenReturnType => {
  const { semanticColors } = theme;

  return {
    color: semanticColors.buttonTextDisabled,
    colorHovered: semanticColors.buttonTextDisabled,
    colorPressed: semanticColors.buttonTextDisabled,
    iconColor: semanticColors.buttonTextDisabled,
    iconColorHovered: semanticColors.buttonTextDisabled,
    iconColorPressed: semanticColors.buttonTextDisabled
  };
};

export const ActionButtonTokens: IButtonComponent['tokens'] = (props, theme): IButtonTokenReturnType => [
  baseTokens,
  props.disabled && disabledTokens
];

const ActionButtonStackProps: IButtonProps['stack'] = {
  horizontalAlign: 'start'
};

export const ActionButton: ButtonVariantsType = props => {
  const { text, iconProps, ...rest } = props;

  return <Button stack={ActionButtonStackProps} content={text} icon={iconProps} tokens={ActionButtonTokens} {...rest} />;
};
