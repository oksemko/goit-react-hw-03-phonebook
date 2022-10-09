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



  formSubmit = ({ name, number }) => {
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

//  ------------ Previous version formSubmit. ------------
  // ----------- Here was added checking, but in this case it wasn`t nessery because setState would be run anyway. ---------


  // formSubmit = ({ name, number }) => {
  //   this.setState(prevState => {
  //     const { contacts } = prevState;
  //     const isContact = contacts.find(contact => contact.name === name);

  //     if (isContact) {
  //       alert(`${name} ia already in contact`);
  //       return contacts;
  //     } else {
  //       return {
  //         contacts: [
  //           {
  //             id: nanoid(),
  //             name,
  //             number,
  //           },
  //           ...contacts,
  //         ],
  //       };
  //     }
  //   });
  // };

  contactDelete = id => {
    this.setState(prevState => {
      const { contacts } = prevState;
      // contacts.filter(contact => contact.id !== id);
      const contactsAfterDelete = contacts.filter(contact => contact.id !== id);
      return {
        contacts: [
          ...contactsAfterDelete
          // (!------> method "filter" return array, but here we need another array [contactaAfterDelete] to delete contacts
          // correctly: only what we need because in other case all contacts will be deleted).
        ]
      };
    });
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
