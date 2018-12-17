import React from 'react';
import './Content.css';
import Card from '../card/Card';

const Content = () =>
    <div className="content">
    <Card icon="https://bit.ly/2S5carp" title="React JS" avatar="https://bit.ly/2uSRlUr" name="John Doe" room="CP1" status="Started"/>
    <Card icon="https://bit.ly/2S5carp" title="React JS" avatar="https://bit.ly/2uSRlUr" name="John Doe" room="CP2" status="Started"/>
    <Card icon="https://bit.ly/2S5carp" title="React JS" avatar="https://bit.ly/2uSRlUr" name="John Doe" room="CP3" status="Registering"/>
    <Card icon="https://bit.ly/2S5carp" title="React JS" avatar="https://bit.ly/2uSRlUr" name="John Doe" room="CP4" status="Registering"/>
    <Card icon="https://bit.ly/2S5carp" title="React JS" avatar="https://bit.ly/2uSRlUr" name="John Doe" room="CP5" status="Started"/>
    </div>


export default Content
