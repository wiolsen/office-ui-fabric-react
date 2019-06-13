import * as React from 'react';
import { ActionButton, Button, IButtonStyles, IButtonTokens, Persona } from '@uifabric/experiments';
import { Card, ICardTokens, ICardItemTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';

const alertClicked = (): void => {
  alert('Clicked');
};

export class CardVerticalExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const siteTextStyles: ITextStyles = {
      root: {
        color: '#025F52',
        fontWeight: FontWeights.semibold
      }
    };
    const descriptionTextStyles: ITextStyles = {
      root: {
        color: '#333333',
        fontWeight: FontWeights.semibold
      }
    };
    const helpfulTextStyles: ITextStyles = {
      root: {
        color: '#333333',
        fontWeight: FontWeights.regular
      }
    };
    const iconStyles: IIconStyles = {
      root: {
        color: '#0078D4',
        fontSize: 16,
        fontWeight: FontWeights.regular
      }
    };
    const footerCardSectionStyles: ICardSectionStyles = {
      root: {
        borderTop: '1px solid #F3F2F1'
      }
    };
    const backgroundImageCardSectionStyles: ICardSectionStyles = {
      root: {
        backgroundImage: 'url(https://placehold.it/256x144)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: 144
      }
    };
    const dateTextStyles: ITextStyles = {
      root: {
        color: '#505050',
        fontWeight: 600
      }
    };
    const subduedTextStyles: ITextStyles = {
      root: {
        color: '#666666'
      }
    };
    const actionButtonStyles: IButtonStyles = {
      root: {
        border: 'none',
        color: '#333333',
        height: 'auto',
        minHeight: 0,
        minWidth: 0,

        selectors: {
          ':hover': {
            color: '#0078D4'
          }
        }
      },
      stack: {
        padding: 0
      },
      content: {
        fontSize: 12,
        fontWeight: FontWeights.semibold
      }
    };

    const sectionStackTokens: IStackTokens = { childrenGap: 30 };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const footerCardSectionTokens: ICardSectionTokens = { padding: '12px 0px 0px' };
    const backgroundImageCardSectionTokens: ICardSectionTokens = { padding: 12 };
    const agendaCardSectionTokens: ICardSectionTokens = { childrenGap: 0 };
    const attendantsCardSectionTokens: ICardSectionTokens = { childrenGap: 6 };
    const footerCardItemTokens: ICardItemTokens = {
      margin: '12px 12px 6px',
      padding: '6px 0px 0px'
    };
    const addEventButtonTokens: IButtonTokens = {
      backgroundColor: 'transparent',
      backgroundColorHovered: 'transparent',
      backgroundColorPressed: 'transparent',
      borderColor: 'transparent',
      borderColorHovered: 'transparent',
      borderColorPressed: 'transparent',
      colorHovered: '#0078D4',
      colorPressed: '#0078D4',
      contentPadding: 0,
      iconColor: '#0078D4',
      iconColorHovered: '#0078D4',
      iconColorPressed: '#0078D4',
      textSize: 12,
      textWeight: FontWeights.regular
    };

    return (
      <Stack horizontal tokens={sectionStackTokens}>
        <Card>
          <Card.Item>
            <Text>Basic vertical card</Text>
          </Card.Item>
        </Card>

        <Card onClick={alertClicked} tokens={cardTokens}>
          <Card.Item>
            <Persona text="Kevin Jameson" secondaryText="Feb 2, 2019" />
          </Card.Item>
          <Card.Item fill>
            <Image src="https://placehold.it/256x144" width="100%" alt="Placeholder image." />
          </Card.Item>
          <Card.Section>
            <Text variant="small" styles={siteTextStyles}>
              Contoso
            </Text>
            <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
            <Text variant="small" styles={helpfulTextStyles}>
              Is this recommendation helpful?
            </Text>
          </Card.Section>
          <Card.Section horizontal styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
            <Icon iconName="RedEye" styles={iconStyles} />
            <Icon iconName="SingleBookmark" styles={iconStyles} />
            <Stack.Item grow={1}>
              <span />
            </Stack.Item>
            <Icon iconName="MoreVertical" styles={iconStyles} />
          </Card.Section>
        </Card>

        <Card onClick={alertClicked} tokens={cardTokens}>
          <Card.Section fill verticalAlign="end" styles={backgroundImageCardSectionStyles} tokens={backgroundImageCardSectionTokens}>
            <Text variant="large" styles={dateTextStyles}>
              NOVEMBER
            </Text>
            <Text variant="superLarge" styles={dateTextStyles}>
              26
            </Text>
          </Card.Section>
          <Card.Section>
            <Text variant="small" styles={subduedTextStyles}>
              Category
            </Text>
            <Text styles={descriptionTextStyles}>Contoso marketing customer visit and survey results</Text>
          </Card.Section>
          <Card.Section tokens={agendaCardSectionTokens}>
            <Text variant="small" styles={descriptionTextStyles}>
              Tuesday 2:00-4:30 pm
            </Text>
            <Text variant="small" styles={subduedTextStyles}>
              Conf Room 34/1301
            </Text>
          </Card.Section>
          <Card.Item grow={1}>
            <span />
          </Card.Item>
          <Card.Section horizontal tokens={attendantsCardSectionTokens}>
            <ActionButton content="12 Attendees" styles={actionButtonStyles} />
            <ActionButton content="4 Accepted" styles={actionButtonStyles} />
            <ActionButton content="3 Declined" styles={actionButtonStyles} />
          </Card.Section>
          <Card.Item styles={footerCardSectionStyles} tokens={footerCardItemTokens}>
            <Button icon="Add" content="Add to Outlook" tokens={addEventButtonTokens} />
          </Card.Item>
        </Card>
      </Stack>
    );
  }
}
