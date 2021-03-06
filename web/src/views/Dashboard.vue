<template>
  <v-container>
    <v-row>
      <v-spacer />
      <v-col>
        <v-autocomplete
          id="projectSearch"
          v-model="selectedProject"
          :items="projects"
          item-text="title"
          item-value="slug"
          clearable
          dense
          outlined
          label="Select a project"
          @input="fetchStats()"
        />
      </v-col>
      <v-col>
        <v-autocomplete
          id="unitSearch"
          v-model="selectedUnit"
          :items="units"
          :disabled="!selectedProject"
          :search-input.sync="unitSearch"
          clearable
          dense
          outlined
          label="Select a unit"
          @input="updateStats()"
        />
      </v-col>
      <v-spacer />
    </v-row>
    <v-row>
      <v-col>
        <apexchart
          width="550"
          type="line"
          style="position:relative; z-index:0;"
          :options="issuesLineChartOptions"
          :series="issuesLineChartSeries"
        ></apexchart>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <apexchart
          width="500"
          type="donut"
          style="position:relative; z-index:0;"
          :options="riskDonutChartOptions"
          :series="riskDonutChartSeries"
        ></apexchart>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <apexchart
            width="550"
            type="line"
            :options="reportsLineChartOptions"
            :series="reportsLineChartSeries"
          ></apexchart>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { SET_ACTIVE_PAGE } from '@/store/mutations';
import { FETCH_PROJECTS, FETCH_STATS } from '@/store/actions';

export default {
  name: 'Dashboard',
  // eslint-disable-next-line vue/no-unused-components
  data: () => ({
    issuesLineChartOptions: {
      chart: {
        id: 'rvso-linechart',
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
      },
      colors: ['#FF6859', '#1EB980'],
      title: {
        text: 'Open vs Closed',
        align: 'left',
      },
    },
    issuesLineChartSeries: [
      {
        name: 'Open',
        data: [],
      },
      {
        name: 'Resolved',
        data: [],
      },
    ],
    reportsLineChartOptions: {
      chart: {
        id: 'reports-linechart',
      },
      title: {
        text: 'Reports Volume',
        align: 'left',
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
      },
    },
    reportsLineChartSeries: [
      {
        name: 'Reports Volume',
        data: [],
      },
    ],
    riskDonutChartOptions: {
      title: {
        text: 'Risks',
        align: 'left',
      },
      noData: { text: 'Waiting for input...' },
      labels: ['Info', 'Low', 'Medium', 'High', 'Critical'],
      colors: ['#72DEFF', '#1EB980', '#FFCF44', '#FF6859', '#D50000'],
    },
    riskDonutChartSeries: [],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    loaded: false,
    unitSearch: null,
    units: null,
    selectedUnit: null,
    selectedProject: null,
  }),
  computed: {
    ...mapState({
      projects: state => state.projects.projects,
      stats: state => state.projects.stats,
    }),
  },
  mounted() {
    this.$store.commit(SET_ACTIVE_PAGE, 'Dashboard');
    this.$store.dispatch(FETCH_PROJECTS);
  },
  methods: {
    fetchStats() {
      if (this.selectedProject) {
        this.$store.dispatch(FETCH_STATS, this.selectedProject).then(() => {
          this.unitSearch = null;
          this.units = Object.keys(this.stats.units);
          this.setStats(this.stats.project);
        });
      }
    },

    setStats(entity) {
      this.issuesLineChartSeries = [
        {
          name: 'Open',
          data: entity.open,
        },
        {
          name: 'Resolved',
          data: entity.closed,
        },
      ];

      this.riskDonutChartSeries = entity.risks;

      this.reportsLineChartSeries = [
        {
          data: entity.reports,
        },
      ];
    },

    updateStats() {
      this.loaded = false;
      if (this.selectedUnit) {
        this.setStats(this.stats.units[this.selectedUnit]);
      } else {
        this.setStats(this.stats.project);
      }
      this.loaded = true;
    },
  },
};
</script>
