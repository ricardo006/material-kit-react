import React, { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListTwoToneIcon from '@mui/icons-material/FilterListTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardContent,
  Grid,
  Typography,
  Card,
} from '@mui/material';

import FilterTitle from '../FilterTitle/FilterTitle';
import FilterDate from '../FilterDate/FilterDate';
import FilterCountries from '../FilterCountries/FilterCountries';
import FilterLeagues from '../FilterLeagues/FilterLeagues';
import FilterHoursButtons from '../FilterHoursButtons/FilterHoursButtons';
import FilterSelectorsButtons from '../FilterSelectorsButtons/FilterSelectorsButtons';

import palette from '../../../../../../theme/palette';

export default function Filters() {
  const [accordionExpanded, setAccordionExpanded] = useState(0);
  const [selectedTab, setSelectedTab] = useState(false);
  const [selectedCountryId, setSelectedCountryId] = useState(null);

  const styles = {
    card: {
      backgroundColor: palette.primary.lighter,
      boxShadow: 'none',
      marginTop: { xs: 2, md: 2 },
      ml: 2,
      mr: 2,
    },
    accordion__typography: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      pr: 2,
      ml: 1,
      color: palette.primary.main,
    }
  };

  const handleAccordionExpand = () => {
    setAccordionExpanded(!accordionExpanded);
  };

  const handleSelectedCountryId = (countryId) => {
    setSelectedCountryId(countryId);
  }

  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
  }

  return (
    <Card sx={styles.card}>
      <Accordion expanded={accordionExpanded} sx={{ backgroundColor: palette.primary.lighter }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={handleAccordionExpand} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body2" sx={styles.accordion__typography}>
            <FilterListTwoToneIcon sx={{ color: palette.primary.main, mr: 2 }} />
            Filtros
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <FilterSelectorsButtons sendSelectedTab={handleSelectedTab} />

          <Grid container xs={12} sm={12} md={12}>
            <FilterTitle 
              Icon={AccessTimeTwoToneIcon}
              title={'Próximas horas'}
            />

            <FilterHoursButtons sendSelectedTab={handleSelectedTab} />

            <Grid container spacing={2} sx={{ mr: 2 }}>
              <FilterTitle 
                Icon={EventAvailableTwoToneIcon}
                title={'Por intervalo de datas'}
              />

              <FilterDate 
                id={'startDate'}
                label={'De'}
              />

              <FilterDate 
                id={'endDate'}
                label={'Até'}
              />       
            </Grid>
          </Grid>
        </AccordionDetails>

        <CardContent sx={{ display: accordionExpanded ? 'block' : 'none' }}>
          {selectedTab === 0 && (
            <FilterCountries sendSelectedCountryId={handleSelectedCountryId} />
          )}

          {selectedTab === 1 && (
            <FilterLeagues selectedCountryId={selectedCountryId} />
          )}

          {selectedTab === 2 && <Typography>Minhas Apostas</Typography>}
        </CardContent>
      </Accordion>
    </Card>
  );
}
