import {Card,CardContent,Typography,Box } from "@mui/material";

function StatCard({title,value,color,icon }) {

    return (
        <Card className="stat-card">
            <CardContent className="stat-card-content">
                <Box className="stat-card-header">
                    <Typography className="stat-card-title">
                        {title}
                    </Typography>

                    <Box
                        className="stat-card-icon"
                        sx={{color }}
                    >
                        {icon}
                    </Box>
                </Box>

                <Typography className="stat-card-value">
                    {value}
                </Typography>

            </CardContent>
        </Card>
    );
}

export default StatCard;