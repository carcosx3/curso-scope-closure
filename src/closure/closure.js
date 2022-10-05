function greeting(username = 'Oscar') {
    function displayUsername() {
        return `Hola ${username}`;
    }

    return displayUsername;
}

const greetingOscar = greeting();
const greetingCarlos = greeting('Carlos');
console.log( greetingOscar() );
console.log( greetingCarlos() );