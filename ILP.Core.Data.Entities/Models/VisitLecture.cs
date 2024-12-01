using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ILP.Core.Data.Entities.Models
{
    public class VisitLecture
    {
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