import * as React from 'react';
import { IPageSectionProps, Markdown } from '@uifabric/example-app-base/lib/index2';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { TooltipPageProps } from './TooltipPage.doc';
import { Platforms } from '../../../interfaces/Platforms';

const baseUrl = 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/apps/fabric-website/src/pages/Controls/TooltipPage/';

export const TooltipPage: React.StatelessComponent<IControlsPageProps> = props => {
  return (
    <ControlsAreaPage
      {...props}
      {...TooltipPageProps[props.platform]}
      otherSections={_otherSections(props.platform) as IPageSectionProps[]}
    />
  );
};

function _otherSections(platform?: Platforms): IPageSectionProps<Platforms>[] | undefined {
  switch (platform) {
    case 'android':
      return [
        {
          sectionName: 'Implementation',
          editUrl: baseUrl + 'docs/android/TooltipImplementation.md',
          content: (
            <Markdown>
              {
                require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/TooltipPage/docs/android/TooltipImplementation.md') as string
              }
            </Markdown>
          )
        }
      ];
  }
}
