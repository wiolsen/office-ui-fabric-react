import * as React from 'react';
import { IPersonaSharedProps, Persona, PersonaInitialsColor, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import './PersonaExample.scss';

const examplePersona: IPersonaSharedProps = {
  secondaryText: 'Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm'
};

const personaWithInitials: IPersonaSharedProps = {
  ...examplePersona,
  text: 'Maor Sharett',
  imageInitials: 'MS'
};

export class PersonaInitialsExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className="ms-PersonaExample">
        <Persona {...examplePersona} text="Kat Larrson" size={PersonaSize.size24} />
        <Persona {...examplePersona} text="Annie" size={PersonaSize.size24} />
        <Persona {...examplePersona} text="Annie Lind" size={PersonaSize.size32} />
        <Persona {...examplePersona} text="Annie Boyl Lind" size={PersonaSize.size32} />
        <Persona {...examplePersona} text="Annie Boyl Carrie Lindqvist" size={PersonaSize.size40} />
        <Persona {...examplePersona} text="+1 (111) 123-4567 X4567" size={PersonaSize.size40} />
        <Persona {...examplePersona} text="+1 (555) 123-4567 X4567" size={PersonaSize.size48} allowPhoneInitials={true} />
        <Persona {...examplePersona} text="宋智洋" size={PersonaSize.size48} />
        <Persona {...examplePersona} text="남궁 성종" size={PersonaSize.size56} />
        <Persona {...examplePersona} text="خسرو رحیمی" size={PersonaSize.size56} />
        <Persona {...personaWithInitials} initialsColor={PersonaInitialsColor.lightBlue} size={PersonaSize.size72} />
        <Persona {...personaWithInitials} initialsColor={PersonaInitialsColor.magenta} size={PersonaSize.size100} />
        <Persona {...personaWithInitials} initialsColor={PersonaInitialsColor.teal} coinSize={150} />
      </div>
    );
  }
}
