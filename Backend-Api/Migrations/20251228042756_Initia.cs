using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend_Api.Migrations
{
    /// <inheritdoc />
    public partial class Initia : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "HeroSections",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "HeroSections");
        }
    }
}
