import plotly.express as px
import pandas as pd

# Create dataframe from the provided data
data = {
    'area': ['Employment', 'Asset Development', 'Health', 'Learning'],
    'count': [3, 4, 2, 2]
}
df = pd.DataFrame(data)

# Create horizontal bar chart with data labels
fig = px.bar(df, 
             x='count', 
             y='area', 
             orientation='h',
             title='KISRA Partnerships by HEAL Program Area',
             color_discrete_sequence=['#5D878F'],  # Using cyan-green from the color scheme
             text='count')  # Add data labels

# Update layout with abbreviated axis titles (15 char limit) and bar spacing
fig.update_layout(
    xaxis_title='Partnerships',
    yaxis_title='HEAL Areas',
    bargap=0.3  # Add spacing between bars
)

# Position text labels on the bars
fig.update_traces(textposition='inside', textfont_color='white')

# Save the chart
fig.write_image('kisra_partnerships_chart.png')