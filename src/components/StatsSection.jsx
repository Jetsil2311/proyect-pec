import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const barData = {
  labels: ['Cannabis', 'Cocaína', 'Alucinógenos', 'Anfetamínicos', 'Inhalantes'],
  datasets: [
    {
      label: '2016',
      data: [9.3, 3.5, 0.8, 0.9, 1.0],
      backgroundColor: '#8B8B5A',
      borderRadius: 4,
    },
    {
      label: '2025',
      data: [13.3, 3.6, 1.5, 1.6, 0.9],
      backgroundColor: '#F5A623',
      borderRadius: 4,
    },
  ],
}

const barOptions = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    title: {
      display: true,
      text: 'Alguna vez en la vida (pob. 12–65 años)',
      font: { size: 12 },
    },
  },
  scales: {
    x: {
      ticks: { callback: (v) => v + '%' },
    },
  },
}

const doughnutData = {
  labels: [
    'Alcohol alguna vez',
    'Alcohol reciente',
    'Tabaco fumado',
    'Consumo excesivo mensual',
  ],
  datasets: [
    {
      data: [33.9, 17.8, 15.1, 2.6],
      backgroundColor: ['#B5D435', '#F5A623', '#4A90A4', '#E8785A'],
      borderWidth: 2,
      borderColor: '#fff',
    },
  ],
}

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } },
    title: {
      display: true,
      text: 'Adolescentes mexicanos 12–17 años (2025)',
      font: { size: 12 },
    },
    tooltip: {
      callbacks: {
        label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%`,
      },
    },
  },
}

const lineData = {
  labels: ['2014', '2016', '2018', '2020', '2022', '2024', '2026', '2028', '2030'],
  datasets: [
    {
      label: '% pacientes (real)',
      data: [9.1, 16.0, 24.0, 35.0, 44.0, 51.0, null, null, null],
      borderColor: '#F5A623',
      backgroundColor: 'rgba(245,166,35,0.12)',
      borderWidth: 3,
      pointRadius: 6,
      pointBackgroundColor: '#F5A623',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      tension: 0.35,
      fill: true,
    },
    {
      label: 'Proyección',
      data: [null, null, null, null, null, 51.0, 56.0, 61.0, 65.0],
      borderColor: '#F5A623',
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderDash: [6, 4],
      pointRadius: 4,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#F5A623',
      pointBorderWidth: 2,
      tension: 0.35,
      fill: false,
    },
  ],
}

const ageData = {
  labels: ['2016', '2025'],
  datasets: [
    {
      label: 'Adolescentes 12–17 años',
      data: [6.2, 4.1],
      backgroundColor: '#B5D435',
      borderRadius: 4,
    },
    {
      label: 'Población general 12–65 años',
      data: [9.9, 13.1],
      backgroundColor: '#F5A623',
      borderRadius: 4,
    },
  ],
}

const ageOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    title: {
      display: true,
      text: 'Consumo de drogas ilegales por grupo de edad',
      font: { size: 12 },
    },
  },
  scales: {
    y: {
      max: 20,
      ticks: { callback: (v) => v + '%' },
    },
  },
}

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    title: {
      display: true,
      text: 'Demanda de tratamiento — centros de rehabilitación',
      font: { size: 12 },
    },
    tooltip: {
      callbacks: {
        label: (ctx) => ` ${ctx.parsed.y}% de pacientes`,
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 60,
      ticks: { callback: (v) => v + '%' },
    },
  },
}

const statCards = [
  {
    value: '13.1%',
    label: 'Población general que ha consumido drogas ilegales alguna vez',
    source: 'ENCODAT 2025',
    accent: 'border-brand-orange',
  },
  {
    value: '4.1%',
    label: 'Adolescentes 12–17 años que han probado drogas (bajó de 6.2% en 2016)',
    source: 'ENCODAT 2025',
    accent: 'border-brand-green',
  },
  {
    value: '51%',
    label: 'Pacientes en rehabilitación con adicción a metanfetamina en 2024',
    source: 'Centros de rehabilitación',
    accent: 'border-brand-orange',
  },
  {
    value: '465',
    label: 'Casos de tratamiento por fentanilo en 2024 (vs 3 casos en 2014)',
    source: 'Datos oficiales',
    accent: 'border-brand-green',
  },
]

function StatsSection() {
  return (
    <section className="bg-brand-light py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl font-bold text-brand-dark mb-4">
          Datos y Estadísticas
        </h2>
        <p className="font-body text-base text-gray-600 mb-12 max-w-3xl">
          Los datos presentados a continuación provienen de la{' '}
          <strong>ENCODAT 2025</strong> (Encuesta Nacional de Consumo de Drogas,
          Alcohol y Tabaco), publicada en diciembre de 2025 por la{' '}
          <strong>Secretaría de Salud de México</strong>, y constituyen la fuente
          oficial más actualizada sobre consumo de sustancias en el país.
        </p>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-brand-card rounded-2xl shadow-md p-6">
            <h3 className="font-body text-sm font-semibold text-brand-dark mb-4 uppercase tracking-wide">
              Consumo de drogas ilegales en México
            </h3>
            <div className="h-64">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>

          <div className="bg-brand-card rounded-2xl shadow-md p-6">
            <h3 className="font-body text-sm font-semibold text-brand-dark mb-4 uppercase tracking-wide">
              Alcohol y tabaco en adolescentes
            </h3>
            <div className="h-64">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>

          <div className="bg-brand-card rounded-2xl shadow-md p-6">
            <h3 className="font-body text-sm font-semibold text-brand-dark mb-4 uppercase tracking-wide">
              Metanfetamina en centros de rehabilitación + proyección
            </h3>
            <div className="h-64">
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>

          <div className="bg-brand-card rounded-2xl shadow-md p-6">
            <h3 className="font-body text-sm font-semibold text-brand-dark mb-4 uppercase tracking-wide">
              Drogas ilegales por grupo de edad
            </h3>
            <div className="h-64">
              <Bar data={ageData} options={ageOptions} />
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {statCards.map((card) => (
            <div
              key={card.value}
              className={`bg-brand-card rounded-2xl shadow-md p-6 border-t-4 ${card.accent}`}
            >
              <p className="font-display text-4xl font-black text-brand-orange leading-none mb-2">
                {card.value}
              </p>
              <p className="font-body text-sm text-brand-dark leading-snug">
                {card.label}
              </p>
              <p className="font-body text-xs text-gray-400 mt-2">{card.source}</p>
            </div>
          ))}
        </div>

        {/* Projection Box */}
        <div className="bg-brand-orange rounded-2xl p-8 text-white">
          <h3 className="font-display text-2xl font-bold mb-4">
            ¿Qué puede pasar en los próximos 5 años en México?
          </h3>
          <p className="font-body text-base leading-relaxed">
            Con base en las tendencias observadas en la ENCODAT, si el consumo de
            drogas entre adultos continúa al ritmo registrado —del 9.9% al 13.1%
            en nueve años—, el consumo podría alcanzar entre el{' '}
            <strong>16 y 17%</strong> para el año 2030. La demanda de tratamiento
            por metanfetamina en centros de rehabilitación podría{' '}
            <strong>superar el 60%</strong> de todos los casos atendidos. La
            ENCODAT 2025 también reveló que el{' '}
            <strong>10% de los adolescentes</strong> ya experimenta malestar
            psicológico significativo, una señal de alerta que se correlaciona
            directamente con un mayor riesgo de consumo de sustancias en el
            futuro.
          </p>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
