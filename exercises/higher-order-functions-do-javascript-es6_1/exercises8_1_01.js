const newEmployees = (employeeGen) => {
    const employees = {
      id1: employeeGen('Pedro Guerra'),
      id2: employeeGen('Luiza Drumond'),
      id3: employeeGen('Carla Paiva'),
    }
    return employees;
  };

  const employeeGen = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {fullName, email: `${email}@trybe.com` };
};

console.log(newEmployees(employeeGen));
