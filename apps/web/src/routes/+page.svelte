<script lang="ts">
    import {
        Button, TextBlock, Checkbox, ToggleSwitch, RadioButton, ProgressRing, ProgressBar,
        InfoBadge,
        InfoBar,
    } from '@repo/ui';

    let flavor = "chocolate";
    let checked = false;

</script>

<h1>Sample</h1>

<Button>Click me!</Button>

<Checkbox bind:checked/>

<TextBlock/>

<ToggleSwitch bind:checked/>

<RadioButton bind:group={flavor} value="chocolate">Chocolate</RadioButton>
<RadioButton bind:group={flavor} value="vanilla">Vanilla</RadioButton>
<RadioButton bind:group={flavor} value="strawberry">Strawberry</RadioButton>

<ProgressRing/>
<ProgressRing value={50}/>

<ProgressBar/>

<!--<ComboBox items={[-->
<!--		{ name: "Item 0", value: 0 },-->
<!--		{ name: "Item 1", value: 1 },-->
<!--		{ name: "Item 2", value: 2 },-->
<!--	]}/>-->

<div style={{width:"40px"}}>
    <InfoBadge/>
    <InfoBadge severity="success"/>
    <InfoBadge>0</InfoBadge>
</div>

<InfoBar title="Title" message="Message">
    <Button slot="action">Action</Button>
</InfoBar>

<!--<TextBox placeholder="Enter your name." />-->

