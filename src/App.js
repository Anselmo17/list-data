import React from 'react';

// COMPONENTS DO APP
import FileSaver from 'file-saver';
import Excel from 'exceljs/dist/exceljs';
import Table from '../src/componentes/table';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { compose } from 'redux';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { intlShape } from 'react-intl';
import Button from '@material-ui/core/Button';

// MOCK JSON
// const dataList = require('./componentes/mock');

const style = theme => ({
  title: {
    fontSize: '40px',
    color: 'black',
    textAlign: 'center',
    marginTop: '0px',
    spacing: '16px',
    padding: '10px'
  },
  table: {
    border: '15px',
    overflow: 'auto'
  }
});


class App extends React.Component {


  render() {
    const { classes } = this.props;


    const reports = () => {
      const workbook = new Excel.Workbook();

      workbook.created = new Date();

      const worksheet = workbook.addWorksheet();

      // HEADER DAS COLUMNS
      worksheet.columns = [
        { header: 'CADASTRO_UID' },
        { header: 'NOME DA PESSOA' },
        { header: 'ANO'},
        { header: 'MODELO CARRO'},
        { header: 'PLACA' },
        { header: 'ESTADO' }
      ];

      
      const list = [
        {
          guid: 'a776fc96-2a79-484e-9274-f39b7fe6f35b',
          name:'Violet',
          ano: 2019,
          modelo: 'scort',
          placa: 'UUT0088',
          estado: 'Goiás (GO)'
        },
        {
          guid: 'f3dfe7ed-999e-4791-a46c-e18004113dc8',
          name: 'Rosemary',
          ano: 2019,
          modelo: 'fiorino',
          placa: 'BBT6677',
          estado: 'Bahia (BA)'
        },
        {
          guid: 'be7ad24b-3d2f-451a-a8e4-4496eaa9f749',
          name: 'Brianna',
          ano: 2001,
          modelo: 'scort',
          placa: 'ZXC6600',
          estado: 'Minas Gerais (MG)'
        },
        {
          guid: '265bf95f-0c8e-46b7-be20-4d9b7ba3de53',
          name: 'Delaney',
          ano: 2001,
          modelo: 'brasilia',
          placa: 'UUT0088',
          estado: 'Ceará (CE)'
        },
        {
          guid: 'f7adeb8c-d20c-450c-9c29-8f8495426667',
          name: 'Paige',
          ano: 2001,
          modelo: 'palio',
          placa: 'BBT6677',
          estado: 'Maranhão (MA)'
        },
        {
          guid: '19f5cf66-4522-443b-8b92-4a111e16fe08',
          name: 'Aileen',
          ano: 2019,
          modelo: 'scort',
          placa: 'XRT6677',
          estado: 'Maranhão (MA)'
        },
        {
          guid: 'a855b0f5-d1c9-410a-be20-ab55788df6c0',
          name: 'Oneal',
          ano: 2019,
          modelo: 'brasilia',
          placa: 'UUT0088',
          estado: 'Bahia (BA)'
        },
        {
          guid: '12aa4679-8847-4fb7-b556-31bebd6be3f6',
          name:'Tameka',
          ano: 2001,
          modelo: 'opalla',
          placa: 'QAS8900',
          estado: 'Acre (AC)'
        },
        {
          guid: 'e11055df-074c-48e7-a6bc-985ac19a3ba0',
          name: 'Bradley',
          ano: 2019,
          modelo: 'opalla',
          placa: 'BBT6677',
          estado: 'Maranhão (MA)'
        },
        {
          guid: '8110273d-bba0-4f29-8468-dfb3b0b76006',
          name:  'Johanna',
          ano: 2019,
          modelo: 'palio',
          placa: 'ZXC6600',
          estado: 'Amapá'
        },
        {
          guid: '11a47263-4886-4721-99e2-bfa794969a31',
          name: 'Coleman',
          ano: 2019,
          modelo: 'scort',
          placa: 'ZXC6600',
          estado: 'Maranhão (MA)'
        },
        {
          guid: '08a5a1a6-80db-47b5-bb36-b3cd4b93e84c',
          name: 'Farrell',
          ano: 2019,
          modelo: 'opalla',
          placa: 'XRT6677',
          estado: 'Ceará (CE)'
        },
        {
          guid: 'a391496a-fbfc-4162-93c2-d435b6331b49',
          name: 'Lancaster',
          ano: 2019,
          modelo: 'palio',
          placa: 'XRT6677',
          estado: 'Bahia (BA)'
        }
      ]


      const dataList = list;
      // pegando a lista de dados e adicionando no excel 
      dataList.forEach((item) => {
        // adicionando as linhas na planilha do excel
        worksheet.addRow(Object.values(item));
      });


      // Iterar sobre todas as linhas que possuem valores em uma planilha
      worksheet.eachRow(function (row) {
        // Iterar sobre todas as células não nulas em uma linha
        row.eachCell(function (cell, colNumber) {
          const col = worksheet.getColumn(colNumber);
          if (cell.value && (!col.width || col.width < cell.value.toString().length))
            col.width = cell.value.toString().length * 1.3;
        });
      });

      workbook.xlsx.writeBuffer()
        .then(buffer => {
          FileSaver.saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Cadastro Pessoas.xlsx');
        })
        .catch(error => {
          throw error;
        });
    };

    return (

      // CONTAINER TABLE 
      <Grid container spacing={16} className="App">
        <Grid item xs={12}>
          <Paper variant={2}>
            <Typography className={classes.title}>
              NUTRIÇÃO DIÁRIA
            </Typography>
            <Table className={classes.table} />
          </Paper>
        </Grid>

        {/* BOTAO PARA FAZER DOWNLOADS  */}
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Button variant="contained"
              color="primary"
              className={classes.button}
              onClick={reports}
            >EXPORTAR EXCEL</Button>
          </Grid>
        </Grid>
        
      </Grid>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object,
  intl: intlShape
};

export default compose(withStyles(style))(App);
