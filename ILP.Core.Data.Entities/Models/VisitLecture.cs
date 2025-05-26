using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ILP.Core.Data.Entities.Models
{
    public class VisitLecture
    {
        [Key]
        public string Id { get; set; } = string.Empty;
        public TimeSpan Duration { get; set; }
        [Required]
        public Role Role { get; set; } = Role.Standard;
        [Required]
        public string UserId { get; set; } = null!;
        [JsonIgnore]
        public User? User { get; set; }
        [Required]
        public string LectureId { get; set; } = null!;
        [JsonIgnore]
        public Lecture? Lecture { get; set; }
    }
}