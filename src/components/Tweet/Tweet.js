import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import DeleteTwotoneIcon from '@material-ui/icons/DeleteTwoTone'
import moment from 'moment'

import './Tweet.scss'

export default function Tweet(props) {
    const { tweet: { name, tweet, time }, index, deleteTweet } = props
    
    return (
        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                    <h5>{name}</h5>
                    <DeleteTwotoneIcon onClick={() => deleteTweet(index)} />
                </div>
                <p>{tweet}</p>
                <div className="tweet__date-add-tweet">
                    { moment(time).format('DD/MM/YYY HH:mm')}
                </div>
            </CardContent>
            
        </Card>
    )
}