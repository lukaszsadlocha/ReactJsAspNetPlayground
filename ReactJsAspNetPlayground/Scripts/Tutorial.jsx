var contacts = [
  {key: 1, name: "James Nelson", email: "james@jamesknelson.com"},
  {key: 2, name: "Bob" , email: "bbbo@jamesknelson.com" }
]

var listElements = contacts
  .filter(function(contact) { return contact.email; })
  .map(function(contact) {
    return React.createElement('li', {key: contact.key},
      React.createElement('h2', {}, contact.name),
      React.createElement('a', {href: 'mailto:'+contact.email}, contact.email)
    )
  })

var rootElement =
  <div>
    <h1>"Contacts"</h1>

    <ul> {listElements}</ul>
  </div>

ReactDOM.render(rootElement, document.getElementById('react-app'))