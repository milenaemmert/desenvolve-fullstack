const express = require('express');
const app = express();

app.use(express.static('public'));

const trilhas = [
    {
    titulo: 'Dados',
    paragrafos: [
        'A pessoa que trabalha na área de Dados é responsável por estruturar coletas, entender padrões e criar dashboards para extrair conhecimento de todo tipo de dado.',
        'Aprenda lógica de programação, estrutura de dados, SQL e MySQL, Python, Google BigQuery e Data Studio e Data Visualization.'
    ],
    linkEmenta: 'https://docs.google.com/document/d/e/2PACX-1vSFPoygh9JnGVi0v_K4cMhUdKsekd0kPcC3BoQgbG_Z8MmvySWGC0q0GkDiC5OkyO2wpZyPLVuG5J-w/pub'
    },
    {
        titulo: 'DevOps',
        paragrafos: [
            'A pessoa que trabalha na área de DevOps pode atuar ao mesmo tempo no desenvolvimento dos sistemas e nas suas infraestruturas, sendo responsável por otimizar a produtividade (desenvolvimento) e a confiabilidade (infraestrutura).',
            'Aprenda lógica de programação, Git e Github, Linux, Redes, Dockers, Kubernetes e Cloud (nuvem).',
        ],
        linkEmenta: 'https://docs.google.com/document/d/e/2PACX-1vQOLTb30Up5xGmNN-1t0N0XwIFjhqOsifNCE1O2N0cXf2ySjLX6scpej7egHnLZ8_TTvgFq1elbMuHM/pub'
    },
    {
        titulo: 'Full Stack',
        paragrafos: [
            'A pessoa desenvolvedora Full Stack é responsável por toda a construção da solução e suas integrações.',
            'Aprenda lógica de programação, javascript, HTML/CSS, Node.js, Git e Github.'
        ],
        linkEmenta: 'https://docs.google.com/document/d/e/2PACX-1vSTqGIQmYOGVidAtuJF0MyoO63kf9q9lDKW9KHMzLazbJjJfp-dzGWYAIA9_v1HCraTGhQ0be2cMp0y/pub'
    },
    {
        titulo: 'E-Commerce',
        paragrafos: [
            'A pessoa que trabalha na área de e-commerce é responsável pela gestão da plataforma online de vendas (site, app ou marketplace), além de garantir a performance dos indicadores que compõem todo funil de vendas: tráfego, conversão, receita e ticket médio.',
            'Agilidade para tomar decisões, espírito empreendedor e visão centrada em dados são características presentes do profissional de e-commerce.'
        ],
        linkEmenta: 'https://docs.google.com/document/d/e/2PACX-1vRBjrE3qk4ZBtyleQqq1feJdtrJg9N3xPSfs4NS0ZkuqQ1fBlEEkIL7eaGGLwXBKTlIQ0TkFRl2FAyO/pub'
    },
    {
        titulo: 'Segurança da Informação',
        paragrafos: [
            'A pessoa que trabalha com Segurança da Informação (SI) atua na proteção dos dados e sistemas da empresa ou instituição, visando garantir sua Confidencialidade, Integridade e Disponibilidade.',
            'Aprenda como acontecem os golpes digitais, bem como combatê-los e preveni-los. Em um mundo cada vez mais digital, onde os ataques e golpes cibernéticos só crescem, junto ao surgimento de leis de proteção de dados, trabalhar com SI nunca esteve tão em alta.'
        ],
        linkEmenta: 'https://docs.google.com/document/d/e/2PACX-1vS7MGd-0gngnQFobvwm0pbp_D6o_4TVsQBlWg7zGBVX3m1ggkTlaXRjfEgdU7fwdAAJVisslcuxRw4d/pub'
    },
    {
        titulo: 'User Experience',
        paragrafos: [
            'A pessoa que trabalha com UX Design desenha a experiência de usuários considerando negócios, tecnologia e pessoas.',
            'Através de muita pesquisa, trabalha com processos que envolvem análise de dados, prototipação, entrevistas e aprendizados.'
        ],
        linkEmenta: 'https://docs.google.com/document/d/e/2PACX-1vTEGzbC5viPAp6265gHL0JuBOjxdwkUTa9qKGhilWqB9nJczWuC9wG0yYcFG4Wx1vkr5duz0CYXTbPn/pub'
    }
];

app.get('/trilhas', (req, res) => {
    res.json(trilhas);
});


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
