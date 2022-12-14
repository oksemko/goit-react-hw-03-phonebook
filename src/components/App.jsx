import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { Container, Title } from './App.styled';


export class App extends Component {
    state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsList = localStorage.getItem('contactsList');
    if (contactsList) {
      try {
        const parseContactsList = JSON.parse(contactsList);
        this.setState({ contacts: parseContactsList });
      } catch {
        this.setState({ contacts: [] });
      }
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contactsList', JSON.stringify(this.state.contacts));
    }
  }

  handleFilterChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  }

  filteredContacts = value => {
    const filterNormalize = value.toLowerCase();

    return this.state.contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };



  formSubmit = ({ name, number, contacts }) => {
    const isContact = this.state.contacts.find(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already in contact`);
      return contacts;
    } else {
      this.setState(prevState => {
        const { contacts } = prevState;
        return {
          contacts: [
            {
              id: nanoid(),
              name,
              number,
            },
            ...contacts,
          ],
        };
      });
    }
  }


  contactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };


  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactsForm onSubmit={this.formSubmit} />

        <Title>Contacts</Title>
        <Filter
        title="Find contact by name"
        onChange={this.handleFilterChange}
        value={filter}
        />

        <ContactsList
          filteredContacts={this.filteredContacts(filter)}
          onDelete={this.contactDelete}
        />
      </Container>
    );
  }
}



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
