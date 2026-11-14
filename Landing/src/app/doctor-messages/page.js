'use client'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import DashShell from '@/components/dash/DashShell'
import { Panel } from '@/components/ui'
import { mailData } from '@/data/data'

export default function Page() {
  return (
    <DashShell title="Messages">
      <Panel noPadding>
        <List disablePadding>
          {mailData.map((m, i) => (
            <div key={i}>
              <ListItem secondaryAction={<Typography variant="caption" sx={{ color: "text.secondary" }}>{m.date}</Typography>}>
                <ListItemText primary={m.name} secondary={m.desc} slotProps={{ primary: { fontWeight: 600 }, secondary: { noWrap: true } }} sx={{ pr: 10 }} />
              </ListItem>
              {i < mailData.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Panel>
    </DashShell>
  )
}
