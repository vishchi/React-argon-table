let id = 0;
function createData(Project, Budget, Status, Completion) {
    id++;
    return { id, Project, Budget, Status, Completion };
  }

 let rows =[
    createData('Argon Design System',2500,'pending','60'),
    createData('Angular Now UI Kit',1800,'completed','100'),
    createData('Black Dashboard',3150,'delayed','72'),
    createData('React Material Dashboard',4400,'on schedule','90'),
    createData('Vue Paper UI Kit Pro',2200,'completed','100'),
  ];

  export default rows;