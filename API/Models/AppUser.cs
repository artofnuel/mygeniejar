using System.ComponentModel.DataAnnotations;

namespace API;

public class AppUser
{
    [Required]
    public string? Username { get; set; }
}