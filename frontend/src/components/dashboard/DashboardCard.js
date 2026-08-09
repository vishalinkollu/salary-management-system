import {Card,CardContent,Typography,Box} from "@mui/material";

function DashboardCard({title,value}) {

    return (
        <Card
            sx={{
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
                transition: "0.3s",
                cursor: "pointer",
                border: "1px solid #E2E8F0",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 28px rgba(15,23,42,0.12)"
                }
            }}
        >
            <CardContent>
                <Typography
                    sx={{
                        fontSize: 14,
                        color: "#64748B",
                        fontWeight: 600,
                        mb: 2
                    }}
                >
                    {title}
                </Typography>
                <Box>

                    <Typography
                        sx={{
                            fontSize: 34,
                            fontWeight: 700,
                            color: "#0F172A"
                        }}
                    >
                        {value}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    );
}

export default DashboardCard;