using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ILP.Core.Data.Entities.Models
{
    public class Fellow
    {
        [Key, Column("FellowsId"), JsonIgnore]
        public string Id { get; set; } = null!;
        [Required]
        public string UserId { get; set; } = null!;
        [JsonIgnore]
        public User? User { get; set; }
        [Required]
        public string GroupId { get; set; } = null!;
        [JsonIgnore]
        public Group? Group { get; set; }
        [Required]
        public Role Role { get; set; } = Role.Standard;

    }
}
