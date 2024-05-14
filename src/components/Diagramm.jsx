import Chart from "react-google-charts"

const Sankey = ({chartData}) => {
  return (
    <Chart
      width={'900px'}
      height={'500px'}
      chartType="Sankey"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        sankey: {
          node: {
            width: 15,
          },
          link: { colorMode: 'gradient' },
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  )
}

export default Sankey