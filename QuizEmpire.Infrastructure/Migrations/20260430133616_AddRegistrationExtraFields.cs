using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuizEmpire.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddRegistrationExtraFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "MapLink",
                table: "Venues",
                type: "character varying(500)",
                maxLength: 500,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "character varying(500)",
                oldMaxLength: 500);

            migrationBuilder.AlterColumn<string>(
                name: "Phone",
                table: "Users",
                type: "character varying(20)",
                maxLength: 20,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "character varying(20)",
                oldMaxLength: 20);

            migrationBuilder.AddColumn<bool>(
                name: "AllowJoinPlayers",
                table: "Registrations",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "BirthdayPersonName",
                table: "Registrations",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Comment",
                table: "Registrations",
                type: "text",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CoverUrl",
                table: "Games",
                type: "character varying(500)",
                maxLength: 500,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "character varying(500)",
                oldMaxLength: 500);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AllowJoinPlayers",
                table: "Registrations");

            migrationBuilder.DropColumn(
                name: "BirthdayPersonName",
                table: "Registrations");

            migrationBuilder.DropColumn(
                name: "Comment",
                table: "Registrations");

            migrationBuilder.AlterColumn<string>(
                name: "MapLink",
                table: "Venues",
                type: "character varying(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "character varying(500)",
                oldMaxLength: 500,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Phone",
                table: "Users",
                type: "character varying(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "character varying(20)",
                oldMaxLength: 20,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CoverUrl",
                table: "Games",
                type: "character varying(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "character varying(500)",
                oldMaxLength: 500,
                oldNullable: true);
        }
    }
}
