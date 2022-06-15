
import { Card, Typography, CardContent } from '@mui/material';
// utils
// ----------------------------------------------------------------------

export default function AboutCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography variant="h4" component="div" align='center' sx={{ mb: 5, mt: 5 }}>
    About
  </Typography>
  <Typography sx={{ fontSize: 15 }}>
    Sultan Salong Lumbatan -- real name called this place "KIMANAIT" in memory of the first inhabitants/dwellers
    of this place. Due to the unfaithfulness to God, they were punished. The first inhabitants made a great
    mistake of not having followed the law of God; "KIMANAIT" is derived from the Manobo word "NAIT" which means
    punishment to God. Because of the great faith and sacrifices to God of "DATU MAMPANAMUCAN" (RUPERTO
    TUMANGGONG) this place was saved. SULTAN SALONG LUMBATAN and DATU MAMPANAMUCAN (RUPERTO TUMANGGONG) was the
    founder of Kimanait. Barangay Kimanait was created by virtue of Executive Order No. 306 by [former] Governor
    Anotonio Reuben dated March 10, 1931. It is bounded by the nothern barangays: Malipayon and Langcataon, in the
    south; Barangay Payad; the Municipality of Kadingilan in the east; and the province of North Cotabato in the
    west. Barangay Kimanait has a total land area of 1,570 hectares or 15.70 square kilometers. It is 82
    kilometers away from the central Barangay Poblacion of the municipality. the barangay has 89% of clay soil and
    11% of loam soil.
  </Typography>
</CardContent>
</Card>
  );
}
