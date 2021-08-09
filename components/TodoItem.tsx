import React from 'react';
import Card from 'https://cdn.skypack.dev/@material-ui/core/Card';
import CardContent from 'https://cdn.skypack.dev/@material-ui/core/CardContent';
import Typography from 'https://cdn.skypack.dev/@material-ui/core/Typography';

export default function TodoItem() {
    return (
        <Card>
            <CardContent> 
                <Typography>
                    This is a test
                </Typography>
            </CardContent>
        </Card>
    )
}