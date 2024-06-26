USE [master]
GO
/****** Object:  Database [Ledger]    Script Date: 3/17/2024 4:28:07 PM ******/
CREATE DATABASE [Ledger]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Ledger', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\Ledger.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Ledger_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\Ledger_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [Ledger] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Ledger].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Ledger] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Ledger] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Ledger] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Ledger] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Ledger] SET ARITHABORT OFF 
GO
ALTER DATABASE [Ledger] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Ledger] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Ledger] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Ledger] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Ledger] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Ledger] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Ledger] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Ledger] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Ledger] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Ledger] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Ledger] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Ledger] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Ledger] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Ledger] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Ledger] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Ledger] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Ledger] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Ledger] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Ledger] SET  MULTI_USER 
GO
ALTER DATABASE [Ledger] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Ledger] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Ledger] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Ledger] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Ledger] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Ledger]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 3/17/2024 4:28:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Branch]    Script Date: 3/17/2024 4:28:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Branch](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Status] [bit] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[EditedOn] [datetime2](7) NULL,
	[EditedBy] [nvarchar](max) NULL,
 CONSTRAINT [PK_Branch] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Equipment]    Script Date: 3/17/2024 4:28:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Equipment](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Specifications] [nvarchar](max) NULL,
	[Status] [bit] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[EditedOn] [datetime2](7) NULL,
	[EditedBy] [nvarchar](max) NULL,
 CONSTRAINT [PK_Equipment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Issue]    Script Date: 3/17/2024 4:28:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Issue](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EquipmentId] [int] NULL,
	[BranchId] [int] NULL,
	[Condition] [nvarchar](max) NULL,
	[SerialNo] [nvarchar](max) NULL,
	[Qty] [int] NULL,
	[IssueDate] [nvarchar](max) NULL,
	[MinSheetNo] [nvarchar](max) NULL,
	[IssueVoucher] [nvarchar](max) NULL,
	[IssueTo] [nvarchar](max) NULL,
	[ReceviedBy] [nvarchar](max) NULL,
	[Remarks] [nvarchar](max) NULL,
	[Status] [bit] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[EditedOn] [datetime2](7) NULL,
	[EditedBy] [nvarchar](max) NULL,
 CONSTRAINT [PK_Issue] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Printer]    Script Date: 3/17/2024 4:28:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Printer](
	[Id] [int] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 3/17/2024 4:28:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Username] [nvarchar](max) NULL,
	[Password] [nvarchar](max) NULL,
	[Role] [nvarchar](max) NULL,
	[Status] [bit] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[EditedOn] [datetime2](7) NULL,
	[EditedBy] [nvarchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [IX_Issue_BranchId]    Script Date: 3/17/2024 4:28:07 PM ******/
CREATE NONCLUSTERED INDEX [IX_Issue_BranchId] ON [dbo].[Issue]
(
	[BranchId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Issue_EquipmentId]    Script Date: 3/17/2024 4:28:07 PM ******/
CREATE NONCLUSTERED INDEX [IX_Issue_EquipmentId] ON [dbo].[Issue]
(
	[EquipmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Issue]  WITH CHECK ADD  CONSTRAINT [FK_Issue_Branch_BranchId] FOREIGN KEY([BranchId])
REFERENCES [dbo].[Branch] ([Id])
GO
ALTER TABLE [dbo].[Issue] CHECK CONSTRAINT [FK_Issue_Branch_BranchId]
GO
ALTER TABLE [dbo].[Issue]  WITH CHECK ADD  CONSTRAINT [FK_Issue_Equipment_EquipmentId] FOREIGN KEY([EquipmentId])
REFERENCES [dbo].[Equipment] ([Id])
GO
ALTER TABLE [dbo].[Issue] CHECK CONSTRAINT [FK_Issue_Equipment_EquipmentId]
GO
USE [master]
GO
ALTER DATABASE [Ledger] SET  READ_WRITE 
GO
