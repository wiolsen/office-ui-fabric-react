import * as React from 'react';
import { Button, IButtonComponent } from '@uifabric/experiments';
import { Customizer, IStackProps, Stack } from 'office-ui-fabric-react';

const stackProps: IStackProps = { tokens: { childrenGap: 16 }, padding: 8, maxWidth: 400 };

const ButtonTheme = {
  scopedSettings: {
    Icon: {
      styles: {
        root: {
          fontSize: 24,
          color: 'purple'
        }
      }
    },
    Stack: {
      styles: {
        root: {
          background: 'lightblue'
        }
      }
    },
    Text: {
      styles: {
        root: {
          color: 'purple'
        }
      }
    }
  }
};

const getButtonStyles: IButtonComponent['styles'] = {
  icon: ButtonTheme.scopedSettings.Icon.styles.root,
  stack: ButtonTheme.scopedSettings.Stack.styles.root,
  content: ButtonTheme.scopedSettings.Text.styles.root
};

// tslint:disable:jsx-no-lambda
// tslint:disable:jsx-key
export class SlotsStyledExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Stack>
        <Stack {...stackProps}>
          <Button icon={{ iconName: 'share', styles: ButtonTheme.scopedSettings.Icon.styles }} content="Icon as IIconProps with styles" />
          <Button icon="share" content={{ children: 'Text as ITextProps with styles', styles: ButtonTheme.scopedSettings.Text.styles }} />
          <Button icon={{ iconName: 'share', styles: { root: { color: 'red' } } }} styles={getButtonStyles} content="Button styles prop" />
          <Customizer {...ButtonTheme}>
            <Button icon="share" content="Button scopedSettings" />
          </Customizer>
        </Stack>
      </Stack>
    );
  }
}
