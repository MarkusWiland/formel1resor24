const comparisonData = [
  {
    name: 'Automower 430X',
    price: '23 999 kr',
    battery: '145 min',
    appControl: true,
    rainSensor: true,
  },
  {
    name: 'Worx Landroid M500',
    price: '8 990 kr',
    battery: '90 min',
    appControl: true,
    rainSensor: false,
  },
]

export default function ComparisonPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Jämför produkter</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-8">
        Se skillnaderna mellan populära modeller – specifikation för
        specifikation.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-[hsl(var(--border))] rounded-xl overflow-hidden">
          <thead className="bg-[hsl(var(--card))] text-left">
            <tr>
              <th className="p-4 font-semibold text-sm">Modell</th>
              <th className="p-4 font-semibold text-sm">Pris</th>
              <th className="p-4 font-semibold text-sm">Batteritid</th>
              <th className="p-4 font-semibold text-sm">App-styrning</th>
              <th className="p-4 font-semibold text-sm">Regnsensor</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, i) => (
              <tr
                key={i}
                className="border-t border-[hsl(var(--border))] hover:bg-[hsl(var(--card)/0.5)]"
              >
                <td className="p-4 text-sm font-medium">{item.name}</td>
                <td className="p-4 text-sm">{item.price}</td>
                <td className="p-4 text-sm">{item.battery}</td>
                <td className="p-4 text-sm">
                  {item.appControl ? 'Ja' : 'Nej'}
                </td>
                <td className="p-4 text-sm">
                  {item.rainSensor ? 'Ja' : 'Nej'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
