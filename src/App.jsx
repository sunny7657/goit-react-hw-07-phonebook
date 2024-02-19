import { Section } from './components/Section/Section';
import { FormAddContact } from './components/FormAddContact/FormAddContact';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};
