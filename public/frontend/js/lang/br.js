var lang = {
    //login page
    req_username : "Nome de usuário é requerido",
    req_password : "Senha requerida",
    err_login: "Parece que alguns erros foram detectados, tente novamente.",
    conf_gotit: "OK, entendi!",
    req_firstname: "O primeiro nome é necessário",
    req_lasttname: "O sobrenome é obrigatório",
    req_confirm: "A confirmação da senha é necessária",
    req_email: "E-mail é obrigatório",
    err_email: "O valor não é um endereço de email válido",
    err_match: "A senha e sua confirmação não são iguais",
    req_accept: "Você deve aceitar os Termos e Condições",
    err_dbluser: "O nome de usuário que você digitou já existe.",
    conf_try: "Por favor, tente novamente!",
    err_dblemail: "O e-mail que você digitou já existe.",
    err_dblaccess: "Você está conectado em outros dispositivos.",
    //home page
    business: 'Empresa',
    group: 'Grupo',
    project: 'Projeto',
    process: 'Processo',
    datetofinish: 'Data de término',
    //project page
    dropattach: '<strong> Solte os arquivos anexados aqui ou clique para enviar. </strong> </br> (O arquivo estará seguro.)',
    //group page
    name: 'Nome',
    firstalert: 'Primeiro Alerta',
    secondalert: 'Segundo alerta',
    againalert: 'Alerta Novamente',
    documents: 'Documentos',
    createdby: 'Criado Por',
    createddate: 'Criado Data',
    actions: 'Ações',
    all: 'TODOS',
    //document page
    title: 'Título',
    duedate: 'Vencimento',
    subgroup: 'Sub Grupo',
    status: 'Status',
    opening: 'Aberto',
    developing: 'Em desenvolvimento',
    waitingforclient: 'Esperando pelo cliente',
    onfiled: 'Protocolado',
    waitingorgan: 'Aguardando o retorno do órgão',
    description: 'Descrição',
    createfile: 'Criar arquivo',
    user: 'Usuário',
    location: 'Localização',
    finishedat: 'Terminado em',
    finishedby: 'Terminado por',
    createtask: 'Criar tarefa',
    task: 'Tarefa',
    license: 'Licença',
    //map view page
    err_map: 'O geocódigo não teve sucesso pelo seguinte motivo: ',
};
const kinds_of_document= new Array(
    'Documento Expirado',
    'Está em data a ser feito',
    'Aberto, mas não chegou a tempo',
    'Em desenvolvimento',
    'Esperando pelo cliente',
    'Protocalada - arquivado',
    'Encerrada - fechada - acabamento'
);
const trans_pagination={
    records: {
        processing: 'Carregando...',
        noRecords: 'sem registros.',//'No se encontrarón archivos',
    },
    toolbar: {
        pagination: {
            items: {
                default: {
                    first: 'Primero',
                    prev: 'Anterior',
                    next: 'Siguiente',
                    last: 'Último',
                    more: 'Más páginas',
                    input: 'Número de página',
                    select: 'Seleccionar tamaño de página',
                },
                info: 'Exibindo {{start}} - {{end}} de {{total}} registros',
            },
        },
    },
};
