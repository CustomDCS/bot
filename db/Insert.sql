-- Insert rows into table 'TableName' in schema '[dbo]'
INSERT INTO [dbo].[Users]
( -- Columns to insert data into
 [DiscordName], [CustomDiscordName], [DiscordID], [DateJoined]
)
VALUES
( -- First row: values for the columns in the list above
 'FlamerNZ', 'Shifty 1-1', 1234567, GETDATE()
),
( -- Second row: values for the columns in the list above
 'Matty', 'Smoky', 8901234, GETDATE()
),
( -- Third row: values for the columns in the list above
 'Yushin', 'Zebra 6', 5678901, GETDATE()
)
-- Add more rows here
GO

-- Insert rows into table 'TableName' in schema '[dbo]'
INSERT INTO [dbo].[Roles]
( -- Columns to insert data into
 [Name], [Description]
)
VALUES
( -- First row: values for the columns in the list above
 Admin, ColumnValue2, ColumnValue3
),
( -- Second row: values for the columns in the list above
 ColumnValue1, ColumnValue2, ColumnValue3
)
-- Add more rows here
GO